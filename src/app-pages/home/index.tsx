import { FC } from "react";
import { PageProps } from "../page-factory";

export const HomePage: FC<PageProps> = ({ webpageData: { page, theme } }) => {
  return <div>Home is here</div>;
};
