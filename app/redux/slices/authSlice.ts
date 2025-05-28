import { TUser } from "@/app/constants/type";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthResponse {
  user: TUser;
  token: string;
  message?: string;
}

interface ErrorResponse {
  message: string;
  // Add other error fields if your API returns more
}

interface AuthState {
  user: TUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

// Async Thunks
export const registerUser = createAsyncThunk<
  AuthResponse,
  TUser,
  { rejectValue: ErrorResponse }
>("auth/register", async (userData: TUser, { rejectWithValue }) => {
  try {
    const response = await axios.post<AuthResponse>(
      `api/auth/register`,
      userData
    );
    return response.data;
  } catch (error) {
    if (error) {
      return rejectWithValue({ message: "Registration failed" });
    }
    return rejectWithValue({ message: "An unexpected error occurred" });
  }
});

export const loginUser = createAsyncThunk<
  AuthResponse,
  { email: string; password: string },
  { rejectValue: ErrorResponse }
>("auth/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post<AuthResponse>(`api/auth/login`, {
      email: userData.email,
      password: userData.password,
    });
    return response.data;
  } catch (error) {
    if (error) {
      return rejectWithValue({ message: "Login failed" });
    }
    return rejectWithValue({ message: "An unexpected error occurred" });
  }
});

// Initial state with proper type checking for localStorage
const getInitialAuthState = (): AuthState => {
  if (typeof window === "undefined") {
    return {
      user: null,
      token: null,
      loading: false,
      error: null,
    };
  }

  let user = null;
  try {
    const userData = localStorage.getItem("user");
    user = userData ? JSON.parse(userData) : null;
  } catch (e) {
    console.error("Failed to parse user data from localStorage", e);
  }

  return {
    user,
    token: localStorage.getItem("token"),
    loading: false,
    error: null,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: getInitialAuthState(),
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = null;
      state.token = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      )
      .addCase(
        registerUser.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.loading = false;
          state.error = action.payload?.message || "Registration failed";
        }
      )

      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
          localStorage.setItem("token", action.payload.token);
          localStorage.setItem("user", JSON.stringify(action.payload.user));
        }
      )
      .addCase(
        loginUser.rejected,
        (state, action: PayloadAction<ErrorResponse | undefined>) => {
          state.loading = false;
          state.error = action.payload?.message || "Login failed";
        }
      );
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
