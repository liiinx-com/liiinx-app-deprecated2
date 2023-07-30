import { IconFactory } from "@/components/icons";
import { MenuItemDto } from "@/types/backend-types/menu";
import Link from "next/link";
import { CSSProperties, FC } from "react";
import styles from "./menu-item.module.css";

interface MenuItemProps extends Partial<MenuItemDto> {
  className?: string;
  style?: CSSProperties;
  iconProps?: object | CSSProperties;
}

export const MenuItem: FC<MenuItemProps> = ({
  target = "_blank",
  title = "",
  id = "",
  url = "#",
  className = "",
  iconProps = {},
  style = {},
  icon: iconName,
}) => {
  return (
    <div className={styles.itemWrapper}>
      <Link
        key={id}
        href={url}
        target={target}
        className={className}
        style={style}
      >
        {title}
        <IconFactory name={iconName} props={iconProps} />
      </Link>
    </div>
  );
};
