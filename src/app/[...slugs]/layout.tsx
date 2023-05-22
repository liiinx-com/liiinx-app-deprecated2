import { LayoutFactory } from "@/layouts/layout-factory";
import { ReactNode } from "react";

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
  const [handle = "liiinx", pageName = "home"] = params.slugs;
  const { layout, page, theme } = await (
    await fetch(`http://localhost:3000/api/${handle}/bio`)
  ).json();
  const { variant } = layout;

  return <LayoutFactory componentVariant={variant}>{children}</LayoutFactory>;
};

export default WebsiteLayout;
