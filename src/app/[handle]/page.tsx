import { WebsiteRouteParams } from "./layout";

interface GenericPageParams {
  params: WebsiteRouteParams;
}

export const generateMetadata = async ({ params }: GenericPageParams) => {
  // TODO: fix any
  console.log("generateMetadata page", params);
  return { title: "Create Next Apping", description: "website app" };
};

const GenericPage = () => {
  return <div>GenericPage</div>;
};

export default GenericPage;
