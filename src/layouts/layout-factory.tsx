import { LayoutData } from "@/services/types";
import { FC, ReactNode } from "react";
import { HeemLayout } from "./heem";

export interface LayoutFactoryProps {
  layoutData: LayoutData;
  children: ReactNode;
}

export const LayoutFactory: FC<LayoutFactoryProps> = ({
  children,
  layoutData,
}) => {
  const { variant } = layoutData;

  if (variant === "heem")
    return <HeemLayout layoutData={layoutData}>{children}</HeemLayout>;

  return (
    <div>
      <p>generic layout</p>
      {children}
    </div>
  );
};
