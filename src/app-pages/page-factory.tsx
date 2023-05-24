import { WebpageData } from "@/services/types";
import { FC } from "react";
import { BioPage } from "./bio";

export interface PageFactoryProps {
  webpageData: WebpageData;
}

export interface PageProps {
  webpageData: WebpageData;
}

export const PageFactory: FC<PageFactoryProps> = ({ webpageData }) => {
  // TODO: implement factory => pageType and pageVariant
  const { pageVariant } = webpageData.page;

  if (pageVariant === "bio1") return <BioPage webpageData={webpageData} />;

  return (
    <div>
      <p>generic page</p>
    </div>
  );
};
