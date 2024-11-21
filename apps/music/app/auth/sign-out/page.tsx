import { SessionProvider } from "next-auth/react";
import Dashboard from "./dashboard";

export default function Administrator() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  );
}
