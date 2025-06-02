import { TUser } from "@/app/constants/type";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import Image from "next/image";

interface ViewUserProps {
  user: TUser;
}
const UserProfile: React.FC<ViewUserProps> = ({ user }) => {
  return (
    <div className="flex flex-col items-center px-5 space-y-4 w-max">
      {/* Profile Image */}
      <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
        {user.profileImage ? (
          <Image
            src={user.profileImage}
            alt="Profile"
            width={80}
            height={80}
            className="w-full h-full object-cover"
            unoptimized={true}
          />
        ) : (
          <FaUserAlt className="text-gray-400 text-3xl" />
        )}
      </div>

      {/* User Info - will expand to fit text */}
      <div className="text-center">
        <h3 className="text-xl font-semibold whitespace-nowrap">{user.name}</h3>
        <p className="text-gray-600 whitespace-nowrap">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
