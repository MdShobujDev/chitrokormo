import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const STRAPI_URL = process.env.STRAPI_URL;

export const authOptions = {
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
            return { id: user.id, name: user.username, email: user.email, jwt };
          }
          return null;
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      console.log("t", token);
      console.log("u", user);
      if (user) {
        token.jwt = user.jwt; // Store JWT token in session
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.jwt = token.jwt;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
