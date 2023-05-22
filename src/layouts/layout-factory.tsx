import { FC, ReactNode } from "react";
import { ElasticLayout } from "./elastic-layout";

interface LayoutFactoryProps {
  componentVariant: string;
  children: ReactNode;
}

export const LayoutFactory: FC<LayoutFactoryProps> = ({
  children,
  componentVariant,
}) => {
  if (componentVariant === "layout1")
    return <ElasticLayout>{children}</ElasticLayout>;

  return <div>{children}</div>;
};
