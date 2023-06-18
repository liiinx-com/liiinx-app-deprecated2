import { MediaItemDto } from "@/types";
import { CSSProperties, FC } from "react";
import "./styles.scss";
import { WatchLater } from "./watch-later";

interface VideoCardProps {
  video: MediaItemDto;
  containerStyle?: CSSProperties;
  showChannelName?: boolean;
  showWatchLater?: boolean;
  showMoreButton?: boolean;
}

export const VideoCard: FC<VideoCardProps> = ({
  video: {
    title,
    thumbnails: {
      medium: { url, width, height },
    },
    description,
    publishedAt,
  },
  containerStyle = {},
  showChannelName = false,
  showWatchLater = false,
  showMoreButton = false,
}) => {
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
      <a href="https://www.youtube.com/watch?v=VZvzvLiGUtw" target="_blank">
        <div className="clip">
          <section className="preview-container">
            <img src={url} />
            <span className="time-status">5:15</span>
            <div className="overlay-preview">
              <div className="play-icon">
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
                      d="M8 5v14l11-7z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="preview">
                <img src="https://ucarecdn.com/59482f3c-08f5-4634-9187-df80ecf89b74/mqdefault_6s.webp" />
              </div>
              {showWatchLater && <WatchLater />}
            </div>
          </section>
          <section className="content-container">
            <h3 title={title}>{title}</h3>
            <footer>
              {showChannelName && (
                <a
                  href="https://www.youtube.com/channel/UCukIPSb0N6_vRVD_5VlzqQg"
                  target="_blank"
                  className="channel-name"
                  title={title}
                >
                  channel name
                </a>
              )}
              <div className="meta">
                <p>62M views</p>
                <p>6 months ago</p>
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
