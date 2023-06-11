import { CSSProperties } from "react";
import { Header1 } from "./header1";

export interface HeaderProps {
  dir?: string;
  className?: string;
  style?: CSSProperties;
  shadow?: boolean;
}

interface HeaderFactoryProps {
  variant: string;
  props?: HeaderProps;
}

const defaultProps: HeaderProps = {
  dir: "ltr",
  shadow: true,
};

export const HeaderFactory = ({
  variant,
  props = defaultProps,
}: HeaderFactoryProps) => {
  return <Header1 {...props} />;
};
