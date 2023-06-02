import { WebsiteRouteParams } from "@/app/[...slugs]/layout";
import { WebpageData } from "@/services/types";

export const getPageData = async ({
  params,
}: {
  params: WebsiteRouteParams;
}): Promise<WebpageData> => {
  const [handle = "liiinx", pageName = "home"] = params.slugs;
  const webpageData: WebpageData = await (
    await fetch(`http://localhost:3000/api/${handle}/${pageName}`, {
      cache: "no-cache",
    })
  ).json();

  console.log("webpageData :>> ", webpageData);

  // webpageData.layout.blocks = [sampleHeroBlock];
  // webpageData.page.blocks = [sampleSocialLinksBlock];

  return webpageData;
};
