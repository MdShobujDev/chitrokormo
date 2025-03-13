import axios from "axios";
import NextAuth, { AuthOptions, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

const STRAPI_URL = process.env.STRAPI_URL as string;

interface StrapiUser {
  id: number;
  username: string;
  email: string;
}

interface StrapiAuthResponse {
  jwt: string;
  user: StrapiUser;
}

interface CustomToken extends JWT {
  jwt?: string;
}

interface CustomSession extends Session {
  jwt?: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<{
        id: string;
        name: string;
        email: string;
        jwt: string;
      } | null> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        try {
          const response = await axios.post<StrapiAuthResponse>(
            `${STRAPI_URL}/api/auth/local`,
            {
              identifier: credentials.email,
              password: credentials.password,
            }
          );

          const { jwt, user } = response.data;
          if (user) {
            return {
              id: user.id.toString(),
              name: user.username,
              email: user.email,
              jwt,
            };
          }
          return null;
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            throw new Error(
              `Invalid credentials: ${error.response.data.message}`
            );
          } else if (error instanceof Error) {
            throw new Error(`Invalid credentials: ${error.message}`);
          } else {
            throw new Error("Invalid credentials");
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: CustomToken;
      user?: User | AdapterUser;
    }) {
      if (user) {
        token.jwt = (user as unknown as { jwt: string }).jwt;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: CustomToken;
    }) {
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
