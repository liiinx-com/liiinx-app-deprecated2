import { Text } from "@/components/text";

import { common } from "@/utils";
import { FC } from "react";
import { VideoCardProps } from "../..";

import Image from "next/image";
import "./styles.scss";

export const VideoCard: FC<VideoCardProps> = ({
  video: {
    title,
    thumbnails: {
      medium: { url: thumbnailUrl, width, height },
    },
    duration,
    url,
    statistics: { commentCount, likeCount, viewCount },
    description,

    publishedAtDayjs,
  },
  containerStyle = {},
  showChannelName = false,
  showWatchLater = false,
  showMoreButton = false,
}) => {
  const publishedAtText = common.date.fromNow(publishedAtDayjs);
  const viewsCountText = common.formatNumber(viewCount)?.toLocaleString();

  return (
    <div
      //   onClick={() => onClick(data.id)}
      className="
        group 
        flex 
        flex-col 
        items-center 
        justify-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-400/5 
        cursor-pointer 
        hover:bg-neutral-400/10 
        transition 
        p-3
      "
      style={containerStyle}
    >
      <a href={url} target="_blank">
        <div className="clip">
          <section className="preview-container">
            <Image
              alt={title}
              width={width}
              height={height}
              src={thumbnailUrl}
            />
            <span className="time-status">
              {common.durationToText(duration)}
            </span>
          </section>
          <section className="content-container">
            <Text className="video-title">{title}</Text>
            <footer>
              {showChannelName && (
                <a
                  href="https://www.youtube.com/channel/UCukIPSb0N6_vRVD_5VlzqQg"
                  target="_blank"
                  className="channel-name"
                  title={title}
                >
                  <Text className="video-title" variant="secondaryText">
                    Channel Name
                  </Text>
                </a>
              )}
              <div className="meta">
                <Text title={viewsCountText}>{viewsCountText} views</Text>
                <Text title={publishedAtText}>{publishedAtText}</Text>
              </div>
            </footer>
            {showMoreButton && (
              <button className="more-button">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
              </button>
            )}
          </section>
        </div>
      </a>
    </div>
  );
};
