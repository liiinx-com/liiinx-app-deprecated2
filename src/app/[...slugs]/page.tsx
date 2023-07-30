import { getWebpage } from "@/actions/webpage";
import { PageFactory } from "@/app-pages/page-factory";
import { notFound } from "next/navigation";
import { WebsiteRouteParams } from "./layout";

interface GenericPageParams {
  params: WebsiteRouteParams;
}

export const generateMetadata = async ({ params }: GenericPageParams) => {
  return { title: "Create Next Apping", description: "website app" };
};

const GenericPage = async ({ params }: GenericPageParams) => {
  const [handle = "liiinx", pageName = "home"] = params.slugs;
  const locale = "en";
  const response = await getWebpage(handle, pageName, locale);
  if (!response.ok) notFound();

  const webpageData = response.data;
  return (
    // TODO: size
    <div className="sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7">
      <PageFactory webpageData={webpageData} />
    </div>
  );
};

export default GenericPage;
