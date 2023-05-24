import { SocialLinks1 } from "./social-links1";

export interface SocialLinksProps {}

interface SocialLinksFactoryProps {
  variant: string;
  props?: SocialLinksProps;
}

export const SocialLinksFactory = ({ props }: SocialLinksFactoryProps) => {
  return <SocialLinks1 {...props} />;
};
