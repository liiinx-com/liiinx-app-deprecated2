import { Dayjs } from "dayjs";
import { BaseEntityDto } from "./base";
import { ThumbnailDto } from "./thumbnail";

export interface GetMediaResponse {
  offset: number;

  limit: number;

  items: MediaItemResponse[];
}

export interface MediaStatistics {
  viewCount: number;

  likeCount: number;

  favoriteCount: number;

  commentCount: number;
}

export interface MediaItemDto extends BaseEntityDto {
  title: string;

  description: string;

  mediaType: string;

  thumbnails: ThumbnailDto;

  statistics: MediaStatistics;

  mediaProvider: string;

  publishedAt: string;

  publishedAtDayjs: Dayjs;

  order?: number;
}

export interface MediaItemResponse extends MediaItemDto {
  url: string;

  duration: any;
}
