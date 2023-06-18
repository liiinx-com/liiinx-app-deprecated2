import { BaseEntityDto } from "./base";

export interface GetMediaResponse {
  offset: number;

  limit: number;

  items: MediaItemResponse[];
}

export interface Thumbnail {
  url: string;

  width: number;

  height: number;
}

export interface ThumbnailDto {
  default: Thumbnail;
  high: Thumbnail;
  medium: Thumbnail;
}

export interface MediaItemResponse extends MediaItemDto {
  url: string;
}

export interface MediaItemDto extends BaseEntityDto {
  title: string;

  description: string;

  mediaType: string;

  thumbnails: ThumbnailDto;

  mediaProvider: string;

  publishedAt: Date;

  order?: number;
}
