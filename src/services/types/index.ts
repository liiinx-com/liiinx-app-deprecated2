import { Block } from "./block";

export * from "./hero";

export interface PageData {
  pageVariant: string;
  pageType: string;
  title: string;
  slug: string;
  blocks: Block[];
}

export interface LayoutData {
  handle: string;
  variant: string;
  blocks: Block[];
}

export interface WebpageData {
  layout: LayoutData;
  page: PageData;
}
