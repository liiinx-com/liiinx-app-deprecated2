import { WebsiteRouteParams } from "./layout";

interface GenericPageParams {
  params: WebsiteRouteParams;
}

export const generateMetadata = async ({ params }: GenericPageParams) => {
  return { title: "Create Next Apping", description: "website app" };
};

const GenericPage = () => {
  return <div>GenericPage</div>;
};

export default GenericPage;
