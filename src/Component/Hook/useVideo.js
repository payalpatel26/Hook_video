import { useState, useEffect } from "react";
import YouTube from "../api/Youtube";

const UseVideo = (defaultsearch) => {
  const [video, setvideo] = useState([]);

  useEffect(() => {
    search(defaultsearch);
  }, [defaultsearch]);

  const search = async (vname) => {
    const { data } = await YouTube.get("/search", { params: { q: vname } });
    setvideo(data.items);
  };

  return [video, search];
};

export default UseVideo;
