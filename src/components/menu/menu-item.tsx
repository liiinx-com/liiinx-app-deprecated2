import { MenuItem } from "@/services/types/menu";
import { FC } from "react";
import { IconFactory } from "../icons";
import styles from "./menu-item.module.css";

export const Item: FC<Partial<MenuItem>> = ({
  target = "_blank",
  iconName = "",
  textClassName = "",
  textStyle = {},
}) => {
  return (
    <div className={styles.itemWrapper}>
      testa
      <IconFactory name={iconName} props={{ color: "red" }} />
    </div>
  );
};
