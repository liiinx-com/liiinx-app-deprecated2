import { MenusDto } from "./menu";
import { ThemeDto } from "./theme";

export * from "./theme";

interface Element {
  className?: string;
  style?: object;
  contained: boolean;
}

interface LayoutSection extends Element {
  wrapper: Element;
  isActive: boolean;
}

export interface PageSettingsDto {
  dir: "ltr" | "rtl";
  faviconUrl: string;
  topBar?: LayoutSection;
  header?: LayoutSection;
  hero?: LayoutSection;
  sidebar?: LayoutSection;
  content?: LayoutSection;
  footer?: LayoutSection;
  footerBar?: LayoutSection;
}

export interface LayoutData {
  handle: string;
  variant: string;

  settings: PageSettingsDto;

  menus: MenusDto;

  // blocks: Block[];
}

export interface WebpageData {
  layout: LayoutData;
  page: PageData;
  theme: ThemeDto;
}

export interface PageData {
  pageVariant: string;
  pageType: string;
  title: string;
  slug: string;
  // blocks: Block[];
}
