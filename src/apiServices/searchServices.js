import { getMovie } from "~/utils/request";

export const search = async (q) => {
  const res = await getMovie(q);
  return res.data.results;
};
