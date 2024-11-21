import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/database";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: "sma1lbao",
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials.username === "admin" &&
          credentials.password === "admin"
        ) {
          return {
            username: "admin",
            email: "admin@test.com",
          };
        }
        throw new Error("Invalid credentials.");
      },
    }),
    Github,
  ],
  pages: {
    signIn: "/auth/sign-in", // 自定义登录页面路径（可选）
  },
});
