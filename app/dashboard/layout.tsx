"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TRole } from "../constants/type";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { permissions } from "../constants/types/permissions";
import SidebarSection from "../components/dashboard/SidebarSection";
import Navbar from "../components/dashboard/Navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  const { loading, user } = useSelector((state: RootState) => state.auth);
  console.log("user: ", user);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const collabseSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
        setIsCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (loading) return; // Wait until auth check is complete

    // Redirect to login if no user
    if (!user) {
      router.push("/auth/login");
      return;
    }

    // Check route permissions
    const pathname = window.location.pathname;
    const pathSegments = pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1] || "dashboard";

    const allowedPaths = permissions[user.role as TRole] || [];
    if (!allowedPaths.includes(lastSegment)) {
      router.push("/unauthorized");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="dashboard-container">
      <SidebarSection
        isOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        isCollapsed={isCollapsed}
      />
      <div className="main-content">
        <Navbar
          onToggleSidebar={toggleSidebar}
          onCollapseSidebar={collabseSidebar}
        />
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}
