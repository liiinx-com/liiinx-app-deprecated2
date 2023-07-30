import { store } from "@/store";
import { common } from "@/utils";
import React, { FC } from "react";

export interface TextProps extends React.ComponentPropsWithoutRef<"p"> {
  component?: string;
  featured?: boolean;
  size?: string;
  variant?:
    | "primaryAccentText"
    | "primaryText"
    | "primaryDarkText"
    | "primaryDarkAccentText"
    | "secondaryText"
    | "secondaryDarkText";
}

export const Text: FC<TextProps> = ({
  variant = "primaryText",
  children,
  className = "",
  featured = false,
  style = {},
  component: Component = "p",
  ...rest
}) => {
  const { typography } = store.getState().webpage.config.theme;
  const { primaryAccentText } = typography;

  let props = {
    style: { ...(typography[variant]?.style || {}), ...style },
    className: common.twMerge(typography[variant]?.className || "", className),
    ...rest,
  };

  if (featured) {
    props = {
      ...props,
      className: common.twMerge(
        `border-l-8 pl-3 ${primaryAccentText.className}`,
        props.className
      ),
      style: {
        borderColor: primaryAccentText?.style?.color || "",
        ...props.style,
      },
    };
  }

  return <Component {...props}>{children}</Component>;
};
