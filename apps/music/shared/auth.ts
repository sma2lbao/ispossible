import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/database";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: {
    ...PrismaAdapter(prisma),
    linkAccount: async (account) => {
      const {
        access_token: accessToken,
        refresh_token: refreshToken,
        id_token: idToken,
        token_type: tokenType,
        expires_at: expiresAt,
        ...rest
      } = account;

      await prisma.account.create({
        data: {
          refreshToken,
          accessToken,
          idToken,
          tokenType,
          expiresAt,
          ...rest,
        },
      });

      return account;
    },
  },
  secret: "sma1lbao",
  session: { strategy: "jwt" },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsed = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsed.success) {
          const { email, password } = parsed.data;
          const user = await prisma.user.findUnique({
            where: {
              email: email,
              password: password,
            },
          });
          if (user) return user;
          throw new Error("Invalid credentials.");
        }
        throw parsed.error;
      },
    }),
    Github,
  ],

  callbacks: {
    async session({ session, user, token }) {
      if (session.user && (user || token.sub)) {
        session.user.id = user?.id ?? token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in", // 自定义登录页面路径（可选）
  },
});
