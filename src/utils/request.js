import axios from "axios";

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/",
});

export const getMovie = async (query) => {
  const dataMovie = await request.get("movie", {
    params: {
      api_key: "40df0d06f86b1218d851856780445040",
      query,
    },
  });

  return dataMovie;
};
