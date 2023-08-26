"use client";
import { SessionProvider as AuthSessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  return <AuthSessionProvider>{children}</AuthSessionProvider>;
};
