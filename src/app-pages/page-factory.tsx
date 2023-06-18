import { WebpageData } from "@/types";
import { FC } from "react";
import { BioPage } from "./bio";
import { HomePage } from "./home";

export interface PageFactoryProps {
  webpageData: WebpageData;
}

export interface PageProps {
  webpageData: WebpageData;
}

export const PageFactory: FC<PageFactoryProps> = ({ webpageData }) => {
  const { pageVariant } = webpageData.page;

  if (pageVariant === "bio1") return <BioPage webpageData={webpageData} />;
  if (pageVariant === "home1") return <HomePage webpageData={webpageData} />;

  return (
    <div>
      <p>generic page</p>
    </div>
  );
};
