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


export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const userRole = useSelector((state: RootState) => state.auth.user?.role);
  const user = useSelector((state: RootState) => state.auth.user);

  // Redirect unauthenticated users to the login page
  useEffect(() => {
    if (!userRole) {
      router.push("/auth/login");
    }
  }, [userRole, router]);

  console.log("user: ", user);

  // Get filtered sidebar items based on the user's role
  const filteredSidebarItems = getFilteredSidebarRoutes(userRole as TRole);
  console.log("filteredSidebarItems: ", filteredSidebarItems);

  return (
    <div className="flex w-full flex-col h-full">
      {/* Logo Section */}
      <Logo />
      {/* Scrollable Sidebar Items */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-2 scrollbar-hide">
        {filteredSidebarItems.map((item, index) => (
          <Link key={index} href={item.path} passHref>
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
