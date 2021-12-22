import axios from "axios";
const KEY = "AIzaSyDDp-ZUlu5ExoeE53ftPflcrgs-mkh4Qvg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
