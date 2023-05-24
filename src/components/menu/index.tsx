import { MenuItem } from "@/services/types/menu";
import { FC } from "react";
import { Item } from "./menu-item";

interface MenuProps {
  items: Partial<MenuItem>[];
  direction?: "row" | "column";
}

export const Menu: FC<MenuProps> = ({ items, direction = "row" }) => {
  let className =
    "w-full flex justify-evenly " +
    (direction === "row" ? "flex-row" : "flex-col");

  return (
    <div className={className}>
      {items.map((i) => (
        <Item key={i.id} {...i} />
      ))}
    </div>
  );
};
