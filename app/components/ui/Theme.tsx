"use client";
import { toggleTheme } from "@/app/redux/slices/themeSlice";
import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function Theme() {
  const dispatch = useDispatch();
  const theme = useSelector((state: { theme: string }) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative color p-2 cursor-pointer flex items-center justify-center">
      {/* Theme Toggle Button */}
      {theme === 'dark' ? (
        <FaMoon
          className="w-5 h-5 lg:w-5 lg:h-5 text-gray-600 hover:text-gray-800 transition-colors"
          onClick={() => dispatch(toggleTheme())}
        />
      ) : (
        <FaSun
          className="w-5 h-5 text-yellow-500 hover:text-yellow-300 transition-colors"
          onClick={() => dispatch(toggleTheme())}
        />
      )}
    </div>
  );
}

export default Theme;