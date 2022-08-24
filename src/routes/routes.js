import config from "~/config";
import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import MovieDetail from "~/pages/MovieDetail/MovieDetail";
import Search from "~/pages/Search/Search";
import Watch from "~/pages/Watch/Watch";

const publicRoutes = [
  {
    path: config.routes.home,
    component: <Home />,
  },
  {
    path: config.routes.login,
    component: <Login />,
    layout: null,
  },
  {
    path: config.routes.search,
    component: <Search />,
  },
  {
    path: config.routes.watch,
    component: <Watch />,
  },
  {
    path: config.routes.movie,
    component: <MovieDetail />,
  },
];

export default publicRoutes;
