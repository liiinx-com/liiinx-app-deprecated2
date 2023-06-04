import { WebpageData } from "@/services/types";
import { FC, ReactNode } from "react";
import { HeemLayout } from "./heemv2";

export interface LayoutFactoryProps {
  webPageData: WebpageData;
  children: ReactNode;
}

export const LayoutFactory: FC<LayoutFactoryProps> = ({
  children,
  webPageData,
}) => {
  const {
    layout: { variant },
    theme,
  } = webPageData;

  if (variant === "heem1")
    return (
      <div
        id="body-wrapper"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: theme.body.bgColor,
        }}
      >
        <HeemLayout webpageData={webPageData}>{children}</HeemLayout>
      </div>
    );

  return (
    <div>
      <p>generic layout</p>
      {children}
    </div>
  );
};
