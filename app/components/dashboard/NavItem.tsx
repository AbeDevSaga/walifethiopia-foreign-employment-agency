import React from "react";
import {
  MdDashboard,
  MdPeople,
} from "react-icons/md";
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
  profile: FaUserAlt,
};

interface NavItemProps {
  icon?: string;
  text?: string;
  active?: boolean;
}

export default function NavItem({ icon, text, active }: NavItemProps) {
  const IconComponent = icon ? iconMapping[icon] : null;

  return (
    <div
      className={`flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer transition-colors ${
        active ? "bg-white text-primary" : "text-foreground hover:bg-white"
      }`}
      style={{
        width: 210,
        height: 48,
      }}
    >
      {IconComponent && <IconComponent className="w-4 h-4" />}
      {text && (
        <span className="font-inter font-bold text-sm leading-5 tracking-normal">
          {text}
        </span>
      )}
    </div>
  );
}
