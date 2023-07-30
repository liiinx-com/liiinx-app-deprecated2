import React, { FC } from "react";
import { FooterFactory } from "./footer";
import { HeaderFactory } from "./header";
import { SocialLinksFactory } from "./social-links";
import { YoutubeVideosFactory } from "./youtube-videos";

interface BlockFactoryProps {
  type: string;
  variant: string;
  props?: object;
}

const DefaultBlock: FC<BlockFactoryProps> = ({ type, variant }) => {
  return <h1>{`Default ${type} Block for variant ${variant}`}</h1>;
};

export const BlockFactory: FC<BlockFactoryProps> = (props) => {
  const blocks: any = {
    header: HeaderFactory,
    socialLinks: SocialLinksFactory,
    footer: FooterFactory,
    youtubeVideos: YoutubeVideosFactory,

    default: DefaultBlock,
  };

  const Block = blocks[props.type] || blocks["default"];
  return React.createElement(Block, props);
};
