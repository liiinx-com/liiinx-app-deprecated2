import { LayoutFactory } from "@/layouts/layout-factory";
import { getPageData } from "@/services";
import { ReactNode } from "react";
import "./globals.css";

export interface WebsiteRouteParams {
  slugs: string[];
}

interface WebsiteLayoutProps {
  children: ReactNode;
  params: WebsiteRouteParams;
}

export const generateMetadata = async ({ params }: any) => {
  // TODO: fix any
  return { title: "Create Next Apping", description: "website app" };
};

const WebsiteLayout = async ({ children, params }: WebsiteLayoutProps) => {
  const { layout } = await getPageData({ params });
  return <LayoutFactory layoutData={layout}>{children}</LayoutFactory>;
};

export default WebsiteLayout;
