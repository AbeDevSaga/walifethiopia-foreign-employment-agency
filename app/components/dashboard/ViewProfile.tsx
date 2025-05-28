import { TUser } from "@/app/constants/type";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";

interface ViewUserProps {
  user: TUser;
  closeViewUser: () => void;
}

const ViewProfile: React.FC<ViewUserProps> = ({ user, closeViewUser }) => {
  const getProfileImageSrc = () => {
    if (!user.profileImage) return null;
    if (typeof user.profileImage === "string") return user.profileImage;
    if ("src" in user.profileImage) return user.profileImage.src;
    return null;
  };

  const profileImageSrc = getProfileImageSrc();

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeViewUser}
    >
      <div 
        className="relative p-6 bg-white rounded-lg shadow-lg w-80 max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeViewUser}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {profileImageSrc ? (
              <Image
                src={profileImageSrc}
                alt="Profile"
                width={80}
                height={80}
                className="w-full h-full object-cover"
                unoptimized={true} // Remove this if you want Next.js to optimize the image
              />
            ) : (
              <FaUserAlt className="text-gray-400 text-3xl" />
            )}
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;