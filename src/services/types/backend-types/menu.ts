import { BaseEntityDto } from "./base";

export interface MenuDto extends BaseEntityDto {
  title: string;

  items: MenuItemDto[];
}

export interface MenusDto {
  topBar?: MenuDto;
  sideBar?: MenuDto;
  headerPrimary?: MenuDto;
  headerSecondary?: MenuDto;
  footerPrimary?: MenuDto;
  footerSecondary?: MenuDto;
}

export interface MenuItemDto {
  id?: string;

  title?: string;

  icon?: string;

  url: string;

  target?: string;

  order: number;

  isFeatured: boolean;

  props?: object;
}
