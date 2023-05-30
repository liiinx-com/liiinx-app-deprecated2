import { Block } from "./block";

export interface HeroItem {
  title?: string;
  subTitle?: string;
  mediaUrl?: string;
  mediaType?: string;
}

interface HeroVariantProps {
  items: HeroItem[];
}

export interface HeroBlock extends Omit<Block, "props"> {
  props: HeroVariantProps;
}

export const sampleHeroBlock: HeroBlock = {
  type: "hero",
  variant: "hero1",
  order: 1,
  props: {
    items: [
      {
        title: "Welcome to my website",
        mediaType: "image",
        mediaUrl:
          "https://www.leadengine-wp.com/wp-content/uploads/sites/37/2018/02/startup1.jpg",
      },
    ],
  },
};
