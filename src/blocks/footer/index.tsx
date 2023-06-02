import { MenuDto } from "@/services/types/backend-types/menu";
import { CSSProperties } from "react";
import { Footer1 } from "./footer1";

export interface FooterProps {
  dir?: string;
  className?: string;
  style?: CSSProperties;
  shadow?: boolean;
  menu: MenuDto;
}

interface FooterFactoryProps {
  variant: string;
  props?: FooterProps;
}

const defaultProps: FooterProps = {
  dir: "ltr",
  shadow: true,
  menu: {
    isActive: false,
    isArchived: false,
    items: [],
    title: "",
  },
};

export const FooterFactory = ({
  variant,
  props = defaultProps,
}: FooterFactoryProps) => {
  return <Footer1 {...props} />;
};
