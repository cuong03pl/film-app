import config from "~/config";
import { get } from "~/utils/request";

export const search = async (query, page) => {
  const res = await get("search/movie", {
    params: {
      query,
      api_key: config.api.API_KEY,
      page,
    },
  });
  return res.data;
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

export const getGenresFilm = async (id, page) => {
  const dataMovie = await get(`discover/movie`, {
    params: {
      with_genres: id,
      api_key: config.api.API_KEY,
      page,
    },
  });
  return dataMovie.data;
};

export const getPerson = async (id) => {
  const dataMovie = await get(`person/${id}`, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data;
};
export const getMoviesParticipated = async (id) => {
  const dataMovie = await get(`person/${id}/movie_credits`, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data;
};

export const getReviews = async (id) => {
  const dataMovie = await get(`movie/${id}/reviews`, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};

export const getEpisode = async (id) => {
  const dataMovie = await get(`movie/${id}/lists`, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};

export const getTrailer = async (id) => {
  const dataMovie = await get(`movie/${id}/videos`, {
    params: {
      api_key: config.api.API_KEY,
    },
  });
  return dataMovie.data.results;
};
