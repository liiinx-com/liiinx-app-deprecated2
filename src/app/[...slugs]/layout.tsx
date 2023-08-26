import { getWebpage } from "@/actions/webpage";
import { AppState } from "@/components/providers/app-state";
import { StatePreloader } from "@/components/state-preloader";
import { LayoutFactory } from "@/layouts/layout-factory";
import { store } from "@/store";
import { setWebpage } from "@/store/webpage.slice";
import { notFound } from "next/navigation";
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
  const [handle = "liiinx", pageName = "home"] = params.slugs;
  const locale = "en";

  const response = await getWebpage(handle, pageName, locale);
  if (!response.ok) notFound();

  const webpageData = response.data;
  store.dispatch(setWebpage(webpageData));

  return (
    <>
      <StatePreloader webpage={webpageData} />
      <AppState>
        <LayoutFactory>{children}</LayoutFactory>
      </AppState>
    </>
  );
};

export default WebsiteLayout;
