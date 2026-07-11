/**
 * Auth.js (NextAuth v5) configuration.
 *
 * This is a scaffold for local development and demo purposes only:
 * - CredentialsProvider validates against an in-memory list of mock users
 *   (see MOCK_USERS below). Replace with a real identity provider or a
 *   database-backed user lookup before going to production.
 * - GitHub provider is wired up but requires GITHUB_ID / GITHUB_SECRET
 *   environment variables to function (see .env.example).
 *
 * Role-based access is layered on top via the `role` field attached to the
 * session/JWT. Middleware (src/middleware.ts) uses this to protect
 * /portal/* routes.
 */
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import type { UserRole } from "@/types/auth";

interface MockUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

// TODO: Replace with real user lookup (database / identity provider).
const MOCK_USERS: MockUser[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@gia.example.org",
    password: "password",
    role: "admin",
  },
  {
    id: "2",
    name: "Researcher User",
    email: "researcher@gia.example.org",
    password: "password",
    role: "researcher",
  },
  {
    id: "3",
    name: "Staff User",
    email: "staff@gia.example.org",
    password: "password",
    role: "staff",
  },
  {
    id: "4",
    name: "Student User",
    email: "student@gia.example.org",
    password: "password",
    role: "student",
  },
  {
    id: "5",
    name: "Partner User",
    email: "partner@gia.example.org",
    password: "password",
    role: "partner",
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;

        const user = MOCK_USERS.find(
          (u) => u.email.toLowerCase() === email.toLowerCase()
        );
        if (!user || user.password !== password) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
    // TODO: Set GITHUB_ID / GITHUB_SECRET in the environment to enable.
    GitHub({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: UserRole }).role ?? "student";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token.role as UserRole) ?? "student";
        session.user.id = token.sub ?? "";
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
