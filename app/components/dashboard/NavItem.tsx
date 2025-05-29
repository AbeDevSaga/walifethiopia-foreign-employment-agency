import React from "react";
import { MdDashboard, MdPeople, MdNotifications } from "react-icons/md";
import {
  FaUserShield,
  FaUserGraduate,
  FaUserTie,
  FaUserAlt,
} from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";

type IconMapping = {
  [key: string]: React.ComponentType<{ className?: string }>;
};

const iconMapping: IconMapping = {
  dashboard: MdDashboard,
  users: MdPeople,
  agents: FaUserTie,
  candidates: FaUserGraduate,
  manageAdmins: FaUserShield,
  superAdmins: RiUserStarLine,
  notifications: MdNotifications,
  profile: FaUserAlt,
};

interface NavItemProps {
  icon?: string;
  text?: string;
  active?: boolean;
  isCollapsed?: boolean;
}

export default function NavItem({
  icon,
  text,
  active,
  isCollapsed,
}: NavItemProps) {
  const IconComponent = icon ? iconMapping[icon] : null;

  return (
    <div
      className={`nav-item w-full flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer transition-colors 
        ${active ? "active-nav-item" : ""}
        ${isCollapsed ? "justify-center" : "justify-start"}`
    }
    >
      {IconComponent && <IconComponent className="w-4 h-4" />}
      {!isCollapsed && text && (
        <span className="font-inter font-bold text-sm leading-5 tracking-normal">
          {text}
        </span>
      )}
    </div>
  );
}
