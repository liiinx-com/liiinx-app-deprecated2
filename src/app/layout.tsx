import { FC, ReactNode } from "react";
import "./globals.css";

export const generateMetadata = async () => ({
  title: "Create Next Appa",
});

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <p>root layout</p>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
