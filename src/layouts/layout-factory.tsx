import { LayoutData, ThemeDto } from "@/services/types";
import { FC, ReactNode } from "react";
import { HeemLayout } from "./heemv2";

export interface LayoutFactoryProps {
  layoutData: LayoutData;
  theme: ThemeDto;
  children: ReactNode;
}

export const LayoutFactory: FC<LayoutFactoryProps> = ({
  children,
  layoutData,
  theme,
}) => {
  const { variant } = layoutData;

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
        <HeemLayout theme={theme} layoutData={layoutData}>
          {children}
        </HeemLayout>
      </div>
    );

  return (
    <div>
      <p>generic layout</p>
      {children}
    </div>
  );
};
