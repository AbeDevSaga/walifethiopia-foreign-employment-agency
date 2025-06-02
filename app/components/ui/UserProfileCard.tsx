"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  FaUserAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaIdCard,
} from "react-icons/fa";
import { motion } from "framer-motion";

type TUser = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  bio?: string;
  joinDate?: string;
  role: string;
  profileImage?: StaticImageData;
  coverImage?: StaticImageData;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
};

interface UserProfileCardProps {
  user: TUser;
  editable?: boolean;
  onEdit?: () => void;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  editable = false,
  onEdit,
}) => {
  return (
    <motion.div
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Cover Image - Smaller on mobile */}
      <div className="h-24 sm:h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        {user.coverImage ? (
          <Image
            src={user.coverImage}
            alt="Cover"
            fill
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600" />
        )}
      </div>

      {/* Profile Content */}
      <div className="px-4 sm:px-6 py-4 relative">
        {/* Profile Image - Smaller on mobile */}
        <div className="absolute -top-12 sm:-top-16 left-4 sm:left-6 border-4 border-white rounded-full overflow-hidden">
          <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gray-200 flex items-center justify-center">
            {user.profileImage ? (
              <Image
                src={user.profileImage}
                alt={user.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserAlt className="text-gray-400 text-3xl sm:text-5xl" />
            )}
          </div>
        </div>

        {/* Edit Button */}
        {editable && (
          <motion.button
            onClick={onEdit}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white text-blue-600 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg shadow-sm hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Edit Profile
          </motion.button>
        )}

        {/* User Info */}
        <div className="mt-12 sm:mt-16 md:mt-14">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-sm sm:text-base text-gray-600 flex items-center">
                <FaIdCard className="mr-2 text-sm" />
                {user.role}
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 flex items-center mt-1 sm:mt-2 md:mt-0">
              <FaCalendarAlt className="mr-1 sm:mr-2" />
              Member since {user.joinDate || "Unknown"}
            </p>
          </div>

          {/* Bio */}
          {user.bio && (
            <div className="mt-2 sm:mt-4">
              <p className="text-sm sm:text-base text-gray-700">{user.bio}</p>
            </div>
          )}

          {/* Contact Info */}
          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <div className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-2 sm:mr-3 text-sm" />
              <a
                href={`mailto:${user.email}`}
                className="text-sm sm:text-base text-blue-600 hover:underline"
              >
                {user.email}
              </a>
            </div>

            {user.phone && (
              <div className="flex items-center">
                <FaPhone className="text-gray-500 mr-2 sm:mr-3 text-sm" />
                <a
                  href={`tel:${user.phone}`}
                  className="text-sm sm:text-base text-blue-600 hover:underline"
                >
                  {user.phone}
                </a>
              </div>
            )}

            {user.address && (
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-500 mr-2 sm:mr-3 text-sm" />
                <span className="text-sm sm:text-base text-gray-700">{user.address}</span>
              </div>
            )}
          </div>

          {/* Social Links */}
          {user.socialLinks && (
            <div className="mt-4 sm:mt-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                Social Links
              </h3>
              <div className="flex space-x-3 sm:space-x-4">
                {user.socialLinks.twitter && (
                  <a
                    href={user.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    Twitter
                  </a>
                )}
                {user.socialLinks.linkedin && (
                  <a
                    href={user.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
                {user.socialLinks.github && (
                  <a
                    href={user.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-gray-700 hover:text-black transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfileCard;