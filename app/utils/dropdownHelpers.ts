// utils/dropdownHelpers.ts

type DropdownActions = {
  onViewProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
};

// Implement the actual functions
export const dropdownActions: DropdownActions = {
  onViewProfile: () => {
    console.log("View Profile clicked");
  },
  onSettings: () => {
    console.log("Settings clicked");
  },
  onLogout: () => {
    console.log("Logout clicked");
  },
};

export const getDropdownFunction = (actionKey: keyof DropdownActions) => {
  return dropdownActions[actionKey];
};

export type DropdownFunctionKeys = keyof DropdownActions;