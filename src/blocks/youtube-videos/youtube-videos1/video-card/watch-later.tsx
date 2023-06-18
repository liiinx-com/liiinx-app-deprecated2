export const WatchLater = () => {
  return (
    <button className="watch-later-button">
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <g className="style-scope yt-icon">
          <path
            d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    </button>
  );
};
