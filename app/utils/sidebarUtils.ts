import { TRole } from "../constants/type";
import { permissions } from "../constants/types/permissions";
import { sidebarRoutes } from "../constants/types/sidebarRoutes";

export const getFilteredSidebarRoutes = (role: TRole | undefined) => {
  if (!role) return [];
  const allowedPaths = permissions[role] || []; // Fallback to empty array if role is not found
  return sidebarRoutes.filter((item) => {
    const pathSegments = item.path.split("/").filter(Boolean); // Remove empty strings
    const lastSegment = pathSegments[pathSegments.length - 1]; // Get the last segment
    return lastSegment && allowedPaths.includes(lastSegment);
  });
};

// Example test cases
// console.log(getFilteredSidebarItems("admin")); // Should return all admin-specific items
// console.log(getFilteredSidebarItems("manager")); // Should return manager-specific items
// console.log(getFilteredSidebarItems("viewer")); // Should return viewer-specific items
// console.log(getFilteredSidebarItems(undefined)); // Should return an empty array