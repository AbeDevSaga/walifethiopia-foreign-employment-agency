"use client";
import UserProfileCard from "@/app/components/ui/UserProfileCard";
import { userProfileExample } from "@/app/constants/types/profileExample";
import React from "react";

function Profile() {
  // const [editable, setEditable] = useState(true);
  const editable = true
  return (
    <div className="w-full h-full pb-2 relative mx-auto px-4 overflow-auto scrollbar-hide">
      <UserProfileCard
        user={userProfileExample}
        editable={editable}
        onEdit={() => console.log("Edit clicked")}
      />
    </div>
  );
}

export default Profile;
