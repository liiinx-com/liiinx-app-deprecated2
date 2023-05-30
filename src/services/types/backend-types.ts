export interface PageSettingsDto {
  dir: "ltr" | "rtl";
  faviconUrl: string;
  topBar?: { isActive: boolean };
  sidebar?: { isActive: boolean };
  header?: { isActive: boolean };
  footer?: { isActive: boolean };
  main?: {
    leftBar?: { isActive: boolean };
    rightBar?: { isActive: boolean };
  };
}

export interface LayoutData {
  handle: string;
  variant: string;

  settings: PageSettingsDto;

  //   menus: MenusDto;

  // blocks: Block[];
}

export interface WebpageData {
  layout: LayoutData;
  page: PageData;
  theme: ThemeDto;
}

export interface ThemeDto {
  code?: string;

  bodyBgColor: string;
  primaryBgColor: string;
  headerHeight: string;
  headerImageUrl?: string;
  headerImageStyle?: object;
  mainBorderColor: string;
  primaryTextColor: string;
  profileImageBorderColor: string;
  profileImageBorderWidth: string;
  secondaryTextColor: string;
}

export interface PageData {
  pageVariant: string;
  pageType: string;
  title: string;
  slug: string;
  // blocks: Block[];
}
