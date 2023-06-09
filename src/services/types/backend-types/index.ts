import { MenusDto } from "./menu";
import { ProfileDto } from "./profile";
import { ThemeDto } from "./theme";

export * from "./theme";

export interface BlockProps {
  style?: object;

  className?: string;
}
export interface HeaderProps extends BlockProps {
  dir: string;
}

interface BlockDto {
  blockClassName?: string;

  blockStyle?: object;

  blockContained: boolean;

  blockType: string;

  blockVariant: string;

  blockProps?: BlockProps;

  wrapperContained: boolean;

  order?: number;

  wrapperClassName?: string;

  wrapperStyle?: object;

  isActive: boolean;
}

export interface PageLayoutDto {
  dir: "ltr" | "rtl";
  faviconUrl: string;
  topBar?: BlockDto;
  header?: HeaderBlockDto;
  // hero?: LayoutBlock;
  sidebar?: BlockDto;
  content?: BlockDto;
  footer?: BlockDto;
  footerBar?: BlockDto;
}

export interface LayoutData {
  handle: string;
  variant: string;

  layoutConfig: PageLayoutDto;

  menus: MenusDto;

  // blocks: Block[];
}

export interface WebpageData {
  layout: LayoutData;
  page: PageData;
  theme: ThemeDto;
  profile: ProfileDto;
}

export interface PageData {
  pageVariant: string;
  pageType: string;
  title: string;
  slug: string;
  // blocks: Block[];
}

export interface HeaderBlockDto extends BlockDto {
  blockProps?: HeaderProps;
}
