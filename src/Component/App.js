import React, { useState, useEffect } from "react";
import UseVideo from "./Hook/useVideo";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetail";

const App = () => {
  const [video, search] = UseVideo("building");
  const [selectedvideo, setselectedvideo] = useState(null);

  useEffect(() => {
    setselectedvideo(video[0]);
  }, [video]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className=" eleven wide column">
            <VideoDetails video={selectedvideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={video}
              onSelectedVideo={(video) => {
                setselectedvideo(video);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
