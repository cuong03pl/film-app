import axios from "axios";
import config from "~/config";

const request = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const getMovieSearch = async (query) => {
  const dataMovie = await request.get("search/movie", {
    params: {
      query,
      api_key: config.api.API_KEY,
    },
  });

  return dataMovie;
};
export const getMovieDetails = async (query) => {
  const dataMovie = await request.get(`movie/${query}`, {
    params: {
      api_key: config.api.API_KEY,
    },
  });

  return dataMovie.data;
};
export const getPopular = async () => {
  const dataMovie = await request.get("movie/popular", {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};

export const getFavorite = async () => {
  const dataMovie = await request.get("trending/movie/day", {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};

export const getFilmHomePage = async (path) => {
  const dataMovie = await request.get(path, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};

export const getCast = async (path) => {
  const dataMovie = await request.get(path, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};
