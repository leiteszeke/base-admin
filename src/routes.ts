import { lazy } from "react";

const Home = lazy(() => import("./pages/home/Home"));

const Users = lazy(() => import("./pages/users/Users"));

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },

  { path: "/users", exact: true, name: "Usuarios", component: Users },
];

export default routes;
