import Image from "next/image";
import { FC } from "react";
import { VideoCardProps } from "..";

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
  return (
    <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
      <Image
        alt={title}
        width={width}
        height={height}
        src={thumbnailUrl}
        className="w-full"
      />
      <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
        Live
      </div>
      <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
        <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
        <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          105 Likes
        </span>
        <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
          105 Dislikes
        </span>
      </div>
      <div className="desc p-4 text-gray-800">
        <a
          href={url}
          target="_new"
          className="title font-bold block cursor-pointer hover:underline"
        >
          {title}
        </a>
        <a
          href="https://www.youtube.com/user/sam14319"
          target="_new"
          className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
        >
          @dynamo_gaming
        </a>
        <span className="description text-sm block py-2 border-gray-400 mb-2">
          {description}
        </span>
      </div>
    </div>
  );
};
