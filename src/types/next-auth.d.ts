import type { UserRole } from "@/types/auth";

/**
 * Module augmentation for next-auth so `session.user.role` and
 * `token.role` are properly typed across the app.
 */
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    role?: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
  }
}
