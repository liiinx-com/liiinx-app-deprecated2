import { CSSProperties } from "react";

export interface MenuItem {
  id: string;
  text: string;
  href: string;
  target: string;
  textClassName: string;
  textStyle: CSSProperties;
  iconName: string;
}
