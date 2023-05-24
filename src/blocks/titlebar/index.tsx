import { CSSProperties, FC, ReactNode } from "react";
import { TitleBar1 } from "./titlebar1";

interface TitleBarFactoryProps {
  type: string;
  variant: string;
  props: TitleBarProps;
}

export interface TitleBarProps {
  title: string | ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const TitleBarFactory: FC<TitleBarFactoryProps> = ({
  variant,
  props,
}) => {
  if (variant === "titlebar1") return <TitleBar1 {...props} />;

  return <div>default title bar</div>;
};
