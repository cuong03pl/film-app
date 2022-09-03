import axios from "axios";
import config from "~/config";

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

// export const getMovieSearch = async (query) => {
//   const dataMovie = await request.get("search/movie", {
//     params: {
//       query,
//       api_key: config.api.API_KEY,
//     },
//   });

//   return dataMovie;
// };

export const get = async (path, params) => {
  const res = await request.get(path, params);
  return res;
};
