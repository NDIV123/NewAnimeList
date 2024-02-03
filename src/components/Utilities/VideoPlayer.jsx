"use client";

import { X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const option = {
    width: "300",
    height: "250",
  };

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-0 right-0 p-4 ">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary float-right bg-color-secondary mb-2 transition-all hover:bg-color-accent"
        >
          <X size={32} />
        </button>
        <YouTube
          className="transition-all"
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => {
            alert("Mohon maaf terdapat error pada video trailer")
            setIsErr(true);
          }}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-0 right-0 p-4 m-4 bg-color-secondary text-color-primary hover:bg-color-accent transition-all shadow-xl"
      >
        Buka Trailer
      </button>
    );
  };

  return isErr ? null : isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
