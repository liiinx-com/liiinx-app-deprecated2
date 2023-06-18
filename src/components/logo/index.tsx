import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  imageUrl: string;
  textLogo: string;
}

export const Logo: FC<LogoProps> = ({ imageUrl, textLogo }) => {
  return (
    <div className="flex flex-row w-full items-center gap-2">
      <Image
        src={imageUrl}
        className="rounded-full"
        width={70}
        height={70}
        alt="textLogo"
      />
      <h2>{textLogo}</h2>
    </div>
  );
};
