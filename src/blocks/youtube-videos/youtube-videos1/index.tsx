import { CardContainer } from "@/components/cards";
import { FC } from "react";
import { YoutubeVideosProps } from "..";
import { VideoCard } from "./video-card";

export const YoutubeVideos1: FC<YoutubeVideosProps> = ({ videos }) => {
  return (
    <CardContainer>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </CardContainer>
  );
};
