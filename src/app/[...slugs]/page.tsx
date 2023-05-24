import { PageFactory } from "@/app-pages/page-factory";
import { getPageData } from "@/services";
import { WebsiteRouteParams } from "./layout";

interface GenericPageParams {
  params: WebsiteRouteParams;
}

export const generateMetadata = async ({ params }: GenericPageParams) => {
  return { title: "Create Next Apping", description: "website app" };
};

const GenericPage = async ({ params }: GenericPageParams) => {
  const webpageData = await getPageData({ params });
  return <PageFactory webpageData={webpageData} />;
};

export default GenericPage;
