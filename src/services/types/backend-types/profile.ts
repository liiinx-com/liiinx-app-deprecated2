import { BaseEntityDto } from "./base";

export interface LogoDto {
  textLogo?: string;

  textLogoProps?: object;

  imageLogoUrl?: string;

  imageLogoProps?: object;

  slogan?: string;

  sloganProps?: object;
}

export interface ProfileDto extends BaseEntityDto {
  webpageId: string;

  headerLogo: LogoDto;

  footerLogo?: LogoDto;

  copyright?: string;

  terms?: string;

  privacy?: string;
}
