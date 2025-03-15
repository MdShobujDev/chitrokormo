import axios from "axios";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const STRAPI_URL = process.env.STRAPI_URL;

// Declare module augmentation for Session
declare module "next-auth" {
  interface Session {
    jwt?: string;
  }

  // Extend the built-in User type
  interface User {
    jwt?: string;
    username?: string;
  }
}

// Declare module augmentation for JWT
declare module "next-auth/jwt" {
  interface JWT {
    jwt?: string;
  }
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(`${STRAPI_URL}/api/auth/local`, {
            identifier: credentials?.email,
            password: credentials?.password,
          });

          const { jwt, user } = response.data;
          if (user) {
            return {
              id: user.id,
              name: user.username,
              email: user.email,
              jwt,
              username: user.username,
            };
          }
          return null;
        } catch (error) {
          console.log(error);
          // We're not using the error, so we can omit the variable name
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
      }
      return token;
    },
    async session({ session, token }) {
      session.jwt = token.jwt;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
