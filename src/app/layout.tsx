import { SessionProvider } from "@/components/providers/session-provider";
import { FC, ReactNode } from "react";
import "./globals.css";

export const generateMetadata = async () => ({});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
