import { FC, ReactNode } from "react";

export interface WebsiteRouteParams {
  handle: string;
}

interface WebsiteLayoutProps {
  children: ReactNode;
  params: WebsiteRouteParams;
}

export const generateMetadata = async ({ params }: any) => {
  // TODO: fix any
  console.log("generateMetadata page-layout", params);
  return { title: "Create Next Apping", description: "website app" };
};

const WebsiteLayout: FC<WebsiteLayoutProps> = ({ children, params }) => {
  console.log("params in handle>layout", params);
  return (
    <section>
      <div>WebsiteLayout</div>
      {children}
    </section>
  );
};

export default WebsiteLayout;
