import { Block } from "./block";
import { MenuItem } from "./menu";

interface SocialLinksVariantProps {
  items: MenuItem[];
}

export interface SocialLinksBlock extends Omit<Block, "props"> {
  props: SocialLinksVariantProps;
}

export const sampleSocialLinksBlock: SocialLinksBlock = {
  type: "socialLinks",
  variant: "socialLinks1",
  order: 1,
  props: {
    items: [],
  },
};

// const socialLinks: Partial<MenuItem>[] = [
//   {
//     id: "1",
//     text: "link 1",
//     iconName: "youtube",
//     href: "http://google.com",
//   },
//   {
//     id: "2",
//     text: "link 2",
//     iconName: "instagram",
//     href: "http://google.com",
//   },
//   {
//     id: "3",
//     text: "link 3",
//     iconName: "tiktok",
//     href: "http://google.com",
//   },
// ];
