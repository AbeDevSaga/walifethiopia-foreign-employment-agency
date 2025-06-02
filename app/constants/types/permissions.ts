import { TRole } from "../type";
export const permissions: Record<TRole, string[]> = {
  "admin": [
    "dashboard",
    "admins",
    "agents",
    "candidates",
    "profile",
    "users",
    "notifications",
    "super-admins",
    "settings",
  ],
  "super-admin": [
    "dashboard",
    "candidates",
    "profile",
    "notifications",
  ],
  "agent": [
    "dashboard",
    "candidates",
    "profile",
    "notifications",
  ],
  "candidate": [
    "dashboard",
    "agents",
    "profile",
    "notifications",
  ],
};