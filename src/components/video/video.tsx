import React from "react";
import {
  VideoWrapper,
  VideoVideo,
  VideoPlay,
} from "@/components/video/video.styles";

type Props = {
  src: string;
  poster: string;
};

export default function Video({ src, poster }: Props) {
  const playRef = React.useRef<HTMLDivElement>(null);

  return (
    <VideoWrapper>
      <VideoVideo
        src={src}
        poster={poster}
        playsInline
        controls
        onPlay={() => {
          const play = playRef.current;
          if (play !== null) {
            play.style.opacity = "0";
          }
        }}
      />
      <VideoPlay ref={playRef}>
        <img src="./assets/page/play.svg" alt="" />
      </VideoPlay>
    </VideoWrapper>
  );
}
