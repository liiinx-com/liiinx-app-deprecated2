import { common } from "@/utils";
import Image from "next/image";
import { CSSProperties, FC } from "react";
import { Title } from "../text/title";

interface LogoProps {
  imageUrl?: string;
  textLogo?: string;
  textLogoClassName?: string;
  textLogoStyle?: CSSProperties;
}

export const Logo: FC<LogoProps> = ({
  imageUrl,
  textLogo = " ",
  textLogoStyle = {},
  textLogoClassName = "",
}) => {
  return (
    <div className="flex flex-row w-full items-center gap-2 min-h-[60px]">
      {imageUrl && (
        <Image
          src={imageUrl}
          className="rounded-full"
          width={70}
          height={70}
          alt={textLogo}
        />
      )}
      <Title
        component="h1"
        style={textLogoStyle}
        className={common.twMerge(
          textLogoClassName,
          // "font-extrabold tracking-wide text-lg md:text-xl"
          "font-extrabold tracking-wide text-xl md:text-2xl"
        )}
      >
        {textLogo}
      </Title>
    </div>
  );
};
