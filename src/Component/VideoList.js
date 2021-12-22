import React from "react";
import VideoIteam from "./VideoIteam";

const VideoList = ({ videos, onSelectedVideo }) => {
  const renderList = videos.map((video) => {
    return (
      <VideoIteam
        key={video.id.videoId}
        video={video}
        onSelectedVideo={onSelectedVideo}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
