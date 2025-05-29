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
}
function Navbar({ onToggleSidebar }: NavbarProps) {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="navbar flex flex-col md:flex-row lg:flex-row items-center justify-between lg:py-4 px-2 md:px-6 lg:px-8 space-x-2 space-y-2">
      <div className="w-full lg:w-1/3">
        <SearchBar onToggleSidebar={onToggleSidebar}/>
      </div>
      <div className="w-full hidden sm:flex md:flex items-center justify-between lg:w-auto space-x-2 lg:space-x-7">
        <LanguageOption />
        <Notification />
        <Theme />
        <UserCard user={user} />
      </div>
    </div>
  );
}

export default Navbar;
