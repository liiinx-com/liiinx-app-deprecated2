import { FC } from "react";
import { TitleBarProps } from ".";

export const TitleBar1: FC<TitleBarProps> = ({
  title,
  style = {},
  className = "",
}) => {
  return (
    <div className={className} style={style}>
      {title}
    </div>
  );
};
