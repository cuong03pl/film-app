import config from "~/config";
import { get } from "~/utils/request";

export const search = async (query) => {
  const res = await get("search/movie", {
    params: {
      query,
      api_key: config.api.API_KEY,
    },
  });
  return res.data.results;
};
export const getMovieRightBar = async (path) => {
  const res = await get(path, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return res.data.results;
};
export const getFilmHomePage = async (path) => {
  const dataMovie = await get(path, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};
export const getCast = async (path) => {
  const dataMovie = await get(path, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data;
};

export const getMovieDetails = async (query) => {
  const dataMovie = await get(`movie/${query}`, {
    params: {
      api_key: config.api.API_KEY,
    },
  });

  return dataMovie.data;
};

export const getSimilarFilm = async (id) => {
  const dataMovie = await get(`movie/${id}/similar`, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};
