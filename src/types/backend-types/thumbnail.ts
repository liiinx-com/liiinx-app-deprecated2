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
