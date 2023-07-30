import { GetMediaResponse } from "@/types";
import { common } from "@/utils";

interface GetMediaParams {
  layoutId: string;
  provider?: string;
  mediaType?: string;
}

export const getMediaList = async ({
  layoutId,
  mediaType = "video",
  provider = "youtube",
}: GetMediaParams): Promise<GetMediaResponse> => {
  const mediaListResponse: GetMediaResponse = await (
    await fetch(
      `http://localhost:3003/media/${layoutId}?provider=${provider}&type=${mediaType}`,
      {
        headers: {
          "Webpage-Id": layoutId,
        },
        cache: "no-cache",
      }
    )
  ).json();

  mediaListResponse.items = mediaListResponse.items.map((i) => {
    i.publishedAtDayjs = common.date.toDayjs(i.publishedAt);
    return i;
  });

  return mediaListResponse;
};
