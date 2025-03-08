"use client";
import { SessionProvider } from "next-auth/react";

export default function UserSessionProvider({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}
