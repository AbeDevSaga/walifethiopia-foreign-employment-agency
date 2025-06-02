"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import UserProfile from "./UserProfile";
import { TUser } from "@/app/constants/type";

interface ProfileDropdownProps {
  user: TUser;
  isOpen: boolean;
  onViewProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
}

function ProfileDropdown({
  user,
  isOpen,
  onViewProfile,
  onSettings,
  onLogout,
}: ProfileDropdownProps) {
  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-12 right-0 bg-white border rounded-lg shadow-lg p-2 z-10"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownVariants}
        >
          <div className="flex items-center border-1 border-gray-200 rounded-lg p-2 shadow-lg mb-2">
            <UserProfile user={user} />
          </div>

          <motion.p
            className="px-4 py-2 hover:text-primary cursor-pointer hover:bg-gray-100 rounded-md"
            whileHover={{ x: 2 }}
            onClick={onViewProfile}
          >
            View Profile
          </motion.p>
          <motion.p
            className="px-4 py-2 hover:text-primary cursor-pointer hover:bg-gray-100 rounded-md"
            whileHover={{ x: 2 }}
            onClick={onSettings}
          >
            Settings
          </motion.p>
          <motion.p
            className="px-4 py-2 hover:text-primary cursor-pointer hover:bg-gray-100 rounded-md"
            whileHover={{ x: 2 }}
            onClick={onLogout}
          >
            Logout
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProfileDropdown;
