import { store } from "@/store";
import { FC, ReactNode } from "react";
import { HeemLayout } from "./heem";

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
        className={theme?.body?.className || ""}
        style={{
          width: "100%",
          height: "100%",
          ...(theme?.body?.style || {}),
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
