"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { getFilteredSidebarRoutes } from "@/app/utils/sidebarUtils";
import { TRole } from "@/app/constants/type";

interface SidebarProps {
  onToggleSidebar: () => void;
}
function Sidebar({ onToggleSidebar }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const userRole = useSelector((state: RootState) => state.auth.user?.role);
  const user = useSelector((state: RootState) => state.auth.user);

  // Memoize filtered sidebar items
  const filteredSidebarItems = React.useMemo(() => {
    return getFilteredSidebarRoutes(userRole as TRole);
  }, [userRole]);
  console.log("filteredSidebarItems: ", filteredSidebarItems);

  // Redirect unauthenticated users to the login page
  useEffect(() => {
    if (!userRole) {
      router.push("/auth/login");
    }
  }, [userRole, router]);
  console.log("user: ", user);

  return (
    <div className="flex w-full flex-col h-full">
      <div className="absolute -right-0 p-2">
        <button
          className="lg:hidden text-gray-600 p-2 rounded-md hover:text-gray-800 transition-colors"
          onClick={onToggleSidebar}
        >
          <XMarkIcon className="h-6 w-6 cursor-pointer" />
        </button>
      </div>
      {/* Logo Section */}
      <Logo />
      {/* Scrollable Sidebar Items */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-2 scrollbar-hide">
        {filteredSidebarItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            passHref
            onClick={onToggleSidebar}
          >
            <NavItem
              icon={item.icon}
              text={item.label}
              active={pathname === item.path}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
