"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { createContext, ReactNode, useContext } from "react";

// Define the AuthContext type
interface AuthContextType {
  userSession: any;
  login: () => void;
  logout: () => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  const login = () => signIn("google"); // Change provider if needed
  const logout = () => signOut();

  return (
    <AuthContext.Provider value={{ userSession: session, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
