import { FC, ReactNode } from "react";

interface MenuProps {
  children: ReactNode;
  direction?: "row" | "column";
  gap?: string;
}

export const Menu: FC<MenuProps> = ({
  children,
  direction = "row",
  gap = "gap-2",
}) => {
  let className =
    `w-full flex ${gap} ` + (direction === "row" ? "flex-row" : "flex-col");

  return <div className={className}>{children}</div>;
};
