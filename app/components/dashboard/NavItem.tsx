import React from "react";
import { motion } from "framer-motion";
import { MdDashboard, MdPeople, MdNotifications } from "react-icons/md";
import {
  FaUserShield,
  FaUserGraduate,
  FaUserTie,
  FaUserAlt,
} from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { useTranslation } from "next-i18next";
import { TNavigationItem } from "@/app/constants/type";

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
  navItem?: TNavigationItem;
  active?: boolean;
  isCollapsed?: boolean;
}

export default function NavItem({
  navItem,
  active,
  isCollapsed,
}: NavItemProps) {
  const IconComponent = navItem?.icon ? iconMapping[navItem.icon] : null;
  const { t } = useTranslation("common");

  const getTranslatedContent = React.useCallback(
    (content: string | { key: string; default: string }) => {
      if (typeof content === "string") return content;
      return t(content.key, { defaultValue: content.default });
    },
    [t]
  );

  // Animation variants
  const itemVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className={`nav-item w-full flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer 
        ${active ? "active-nav-item" : ""}
        ${isCollapsed ? "justify-center" : "justify-start"}`}
      whileHover="hover"
      whileTap="tap"
      variants={itemVariants}
      initial={false}
    >
      {IconComponent && (
        <motion.div variants={iconVariants}>
          <IconComponent className="w-4 h-4" />
        </motion.div>
      )}
      {!isCollapsed && navItem?.label && (
        <motion.span
          className="font-inter font-bold text-sm leading-5 tracking-normal"
          variants={{
            hover: { x: 2 },
          }}
        >
          {getTranslatedContent(navItem.label)}
        </motion.span>
      )}
    </motion.div>
  );
}
