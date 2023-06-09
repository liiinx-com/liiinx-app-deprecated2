import { store } from "@/store";
import { FC, ReactNode } from "react";
import { HeemLayout } from "./heemv2";

export interface LayoutFactoryProps {
  children: ReactNode;
}

export const LayoutFactory: FC<LayoutFactoryProps> = ({ children }) => {
  const {
    webpage: { config },
  } = store.getState();

  const {
    layout: { variant },
    theme,
  } = config;

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
        <HeemLayout>{children}</HeemLayout>
      </div>
    );

  return (
    <div>
      <p>generic layout</p>
      {children}
    </div>
  );
};
