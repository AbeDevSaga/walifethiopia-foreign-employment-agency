import { TNavigationItem } from "../type";

export const sidebarRoutes: TNavigationItem[] = [
  {
    path: "/dashboard",
    icon: "dashboard",
    label: { key: "sidebar.dashboard", default: "Dashboard" },
  },
  {
    path: "/dashboard/users",
    icon: "users",
    label: { key: "sidebar.users", default: "Users" },
  },
  {
    path: "/dashboard/candidates",
    icon: "candidates",
    label: { key: "sidebar.candidates", default: "Candidates" },
  },
  {
    path: "/dashboard/agents",
    icon: "agents",
    label: { key: "sidebar.agents", default: "Agents" },
  },
  {
    path: "/dashboard/super-admins",
    icon: "manageAdmins",
    label: { key: "sidebar.super_admins", default: "Super Admins" },
  },
  {
    path: "/dashboard/admins",
    icon: "manageAdmins",
    label: { key: "sidebar.admins", default: "Manage Admins" },
  },
  {
    path: "/dashboard/notifications",
    icon: "notifications",
    label: { key: "sidebar.notifications", default: "Notifications" },
  },
  {
    path: "/dashboard/profile",
    icon: "profile",
    label: { key: "sidebar.profile", default: "Profile" },
  },
  {
    path: "/dashboard/settings",
    icon: "settings",
    label: { key: "sidebar.settings", default: "Settings" },
  },
];
