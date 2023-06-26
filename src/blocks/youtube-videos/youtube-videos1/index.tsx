import { CardContainer } from "@/components/cards";
import { Section } from "@/components/section";
import { Title } from "@/components/text/title";
import { FC } from "react";
import { YoutubeVideosProps } from "..";
import { VideoCard } from "./video-card";

export const YoutubeVideos1: FC<YoutubeVideosProps> = ({ videos }) => {
  //<div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  return (
    <Section>
      <Section className="py-4 px-2">
        <Title component="h2" featured>
          Videos
        </Title>
        <hr className="my-3" />
      </Section>
      <CardContainer>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </CardContainer>
    </Section>
  );
};
