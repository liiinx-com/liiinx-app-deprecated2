import { WebpageData } from "@/types";

export const getWebpage = async (
  handle: string,
  pageName: string
): Promise<WebpageData> => {
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
