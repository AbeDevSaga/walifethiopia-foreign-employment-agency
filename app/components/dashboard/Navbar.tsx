import React from "react";
import Notification from "../ui/Notification";
import SearchBar from "../ui/SearchBar";
import Theme from "../ui/Theme";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import UserCard from "./UserCard";
import LanguageOption from "./LanguageOption";

interface NavbarProps {
  onToggleSidebar: () => void;
  onCollapseSidebar?: () => void;
}

function Navbar({ onToggleSidebar, onCollapseSidebar }: NavbarProps) {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="box-shadow flex flex-col space-y-2 px-2 py-1 md:flex-row md:items-center md:justify-between md:space-y-0 md:py-2">
      {/* Search Bar (Full width on mobile, 1/3 on lg+) */}
      <div className="w-full lg:w-1/3">
        <SearchBar onToggleSidebar={onToggleSidebar} onCollapseSidebar={onCollapseSidebar} />
      </div>

      {/* Right-side elements (Hidden on mobile, visible on sm+) */}
      <div className="hidden w-full sm:flex items-center justify-end gap-2 lg:gap-7 lg:w-auto">
        <LanguageOption />
        <Notification />
        <Theme />
        <UserCard user={user} />
      </div>
    </div>
  );
}

export default Navbar;
