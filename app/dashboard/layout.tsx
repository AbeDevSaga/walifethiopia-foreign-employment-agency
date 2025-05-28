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
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const { loading, user } = useSelector((state: RootState) => state.auth);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      }

      const pathname = window.location.pathname;
      const pathSegments = pathname.split("/").filter(Boolean);
      const lastSegment = pathSegments[pathSegments.length - 1] || "dashboard";

      const allowedPaths = permissions[user?.role as TRole] || [];
      if (!allowedPaths.includes(lastSegment)) {
        router.push("/unauthorized");
      }
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <SidebarSection isOpen={isSidebarOpen} />
      <div className="main-content">
        {/* Navbar */}
        <Navbar onToggleSidebar={toggleSidebar} />
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
}

