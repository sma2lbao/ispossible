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
    createUser: async (user) => {
      const returnUser = await prisma.user.create({
        data: user,
      });
      const userRole = await prisma.role.findFirst({
        where: { name: "USER" },
      });
      if (userRole) {
        await prisma.userRole.create({
          data: {
            userId: returnUser.id,
            roleId: userRole.id,
          },
        });
      }
      return returnUser;
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // 存储用户 ID

        // 查询用户角色
        const userRoles = await prisma.userRole.findMany({
          where: { userId: user.id },
          include: {
            role: true, // 获取角色详细信息
          },
        });

        // 存储角色信息到 token
        token.roles = userRoles.map((userRole) => userRole.role.name);
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = (token.id ?? token.sub) as string;
        session.user.roles = (token.roles || []) as string[];
      }

      return session;
    },
  },
  pages: {
    signIn: "/sign-in", // 自定义登录页面路径（可选）
  },
});
