const routes = {
  home: "/",
  search: "/search/:q",
  login: "/login",
  watch: `/watch/:id`,
  movie: "/movie/:id",
  genres: "/genres/:id/:name",
  person: "/person/:id",
  history: "/history",
  myfavourite: "/myfavourite",
  profile: "/profile",
  error: "*",
};
export default routes;
