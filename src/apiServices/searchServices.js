import { getMovieSearch, getPopular } from "~/utils/request";

export const search = async (q) => {
  const res = await getMovieSearch(q);

  return res.data.results;
};

export const popular = async () => {
  const res = await getPopular();
  return res;
};
