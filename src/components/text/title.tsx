import { common } from "@/utils";
import { FC } from "react";
import { Text, TextProps } from "./index";

export const Title: FC<TextProps> = (props) => {
  const className = common.twMerge(
    // "text-semibold leading-none tracking-tight text-md md:text-lg",
    "text-semibold leading-none tracking-tight text-lg md:text-xl",
    props.className || ""
  );

  return <Text {...props} className={className}></Text>;
};
