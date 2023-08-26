import { IconFactory } from "@/components/icons";
import Link from "next/link";
import { ReactNode } from "react";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container">
      <aside>
        <div className="top">
          <div className="logo">
            <h2>
              L<span className="logo-color">iii</span>nx
            </h2>
          </div>
          <div className="close" id="close">
            <IconFactory name={"close"} props={{}} />
          </div>
        </div>

        <div className="left-sidebar">
          <Link href="#">
            <IconFactory name="home" />
            <h3>Dashboard</h3>
          </Link>
          <Link href="#">
            <IconFactory name="youtube" />
            <h3>Videos</h3>
          </Link>
        </div>
      </aside>

      {children}
    </div>
  );
}
