import { MenuDto } from "@/services/types/backend-types/menu";
import { CSSProperties } from "react";
import { Header1 } from "./header1";

export interface HeaderProps {
  dir?: string;
  className?: string;
  style?: CSSProperties;
  shadow?: boolean;
  menu: MenuDto;
}

interface HeaderFactoryProps {
  variant: string;
  props?: HeaderProps;
}

const defaultProps: HeaderProps = {
  dir: "ltr",
  menu: {
    isActive: false,
    isArchived: false,
    items: [],
    title: "",
  },
  shadow: true,
};

export const HeaderFactory = ({
  variant,
  props = defaultProps,
}: HeaderFactoryProps) => {
  return <Header1 {...props} />;
};
