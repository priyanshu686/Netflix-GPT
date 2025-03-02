import React from "react";
import { useSelector } from "react-redux";
import UseTrailerCall from "../Hooks/useTrailerCall";

const VideoBackground = ({ id }) => {
  UseTrailerCall(id)
  
  const key = useSelector((store) => store.trailer?.trailer);

  return (
    <div className="w-screen h-full">
      <iframe
        className="w-screen aspect-video h-full"
        src={"https://www.youtube.com/embed/"+key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
