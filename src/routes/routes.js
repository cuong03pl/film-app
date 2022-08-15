import config from "~/config";
import Home from "~/pages/Home/Home";
import Login from "~/pages/Login/Login";
import Search from "~/pages/Search/Search";

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
    path: config.routes.login,
    component: <Search />,
  },
];

export default publicRoutes;
