import { CSSProperties } from "react";
import { Footer1 } from "./footer1";

export interface FooterProps {
  dir?: string;
  className?: string;
  style?: CSSProperties;
  shadow?: boolean;
}

interface FooterFactoryProps {
  variant: string;
  props?: FooterProps;
}

const defaultProps: FooterProps = {
  dir: "ltr",
  shadow: true,
};

export const FooterFactory = ({
  variant,
  props = defaultProps,
}: FooterFactoryProps) => {
  return <Footer1 {...props} />;
};
