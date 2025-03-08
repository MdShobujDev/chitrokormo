// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // Redirect unauthenticated users to login page
  },
});

// Apply middleware to protected routes
export const config = {
  matcher: ["/dashboard", "/products", "/settings"], // Protect these routes
};
