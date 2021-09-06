import { Home } from "./lazyRoutes";

export const routes = [
  {
    id: "home",
    path: "/",
    name: "pages.home",
    exact: true,
    Component: Home,
  },
];
