"use client";
import React from "react";
import {
  BiLogOut,
  BiUser,
  BiEdit,
  BiTrash,
  BiUpload,
  BiPlusCircle,
} from "react-icons/bi"; // Import icons
import { MdOutlinePersonAddAlt } from "react-icons/md";

import { FiCalendar } from "react-icons/fi";

// Define the type for the props
interface ActionButtonProps {
  label: string; // Button label
  isCollapsed?: boolean;
  icon?:
    | "logout"
    | "user"
    | "edit"
    | "delete"
    | "update"
    | "add_user"
    | "service"
    | "upload"
    | "calendar";
  onClick: () => void; // Action to perform on click
}

// Map icon names to their corresponding components
const iconMap = {
  logout: BiLogOut,
  user: BiUser,
  edit: BiEdit,
  delete: BiTrash,
  update: BiUpload,
  add_user: MdOutlinePersonAddAlt,
  service: BiPlusCircle,
  upload: BiUpload,
  calendar: FiCalendar,
};

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon,
  onClick,
  isCollapsed,
}) => {
  // Get the icon component based on the icon name
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className={`flex items-center justify-center w-full p-3`}>
      <button
        className={`action-button py-2 w-full rounded-lg flex items-center justify-center shadow-lg hover:shadow-none transition-shadow  whitespace-nowrap`}
        onClick={onClick}
      >
        {IconComponent && <IconComponent className={`${isCollapsed ?"":"mr-3"} text-white`} />}
        {!isCollapsed && label}
      </button>
    </div>
  );
};

export default ActionButton;
