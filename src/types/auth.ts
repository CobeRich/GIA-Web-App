/**
 * Auth-domain types shared between Auth.js config, middleware, and portal pages.
 */

export type UserRole = "admin" | "researcher" | "staff" | "student" | "partner";

export interface GiaUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

/** Maps each role to its default portal landing route. */
export const ROLE_HOME_ROUTE: Record<UserRole, string> = {
  admin: "/portal/admin",
  researcher: "/portal/researcher",
  staff: "/portal/staff",
  student: "/portal/student",
  partner: "/portal/partner",
};
