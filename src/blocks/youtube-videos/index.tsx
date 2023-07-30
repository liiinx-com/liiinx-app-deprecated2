import { getMediaList } from "@/actions/media";
import { store } from "@/store";
import { MediaItemResponse } from "@/types/media";
import { CSSProperties, ReactNode } from "react";
import { YoutubeVideos1 } from "./youtube-videos1";

export interface VideoCardProps {
  video: MediaItemResponse;
  containerStyle?: CSSProperties;
  showChannelName?: boolean;
  showWatchLater?: boolean;
  showMoreButton?: boolean;
}

export interface YoutubeVideosProps {
  className?: string;
  style?: CSSProperties;
  videos: MediaItemResponse[];
  titleComponent?: ReactNode;
}

interface YoutubeVideosFactoryProps {
  variant: string;
  props?: YoutubeVideosProps;
}

const defaultProps: YoutubeVideosProps = {
  videos: [],
};

export const YoutubeVideosFactory = async ({
  variant,
  props = defaultProps,
}: YoutubeVideosFactoryProps) => {
  const layoutId = store.getState().webpage.config.layout.id;
  const { items, limit, offset } = await getMediaList({
    layoutId,
    mediaType: "video",
    provider: "youtube",
  });

  if (variant === "youtubeVideos1")
    return <YoutubeVideos1 {...props} videos={items} />;
  return <div>no youtubeVideos variant for {variant}</div>;
};
