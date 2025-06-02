"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { getFilteredSidebarRoutes } from "@/app/utils/sidebarUtils";
import { TRole } from "@/app/constants/type";
import { logoData } from "@/app/constants/types/logo";

interface SidebarProps {
  onToggleSidebar: () => void;
  isCollapsed?: boolean;
}
function Sidebar({ onToggleSidebar, isCollapsed }: SidebarProps) {
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
      {/* Logo Section */}
      <Logo
        onToggleSidebar={onToggleSidebar}
        logo={logoData}
        isCollapsed={isCollapsed}
      />
      {/* Scrollable Sidebar Items */}
      <div
        className={`flex-1 min-h-0 overflow-y-auto ${
          isCollapsed ? "py-4 px-1" : "p-4"
        } space-y-2 scrollbar-hide`}
      >
        {filteredSidebarItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            passHref
            onClick={onToggleSidebar}
          >
            <NavItem
              navItem={item}
              active={pathname === item.path}
              isCollapsed={isCollapsed}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
