import { Home, SearchResult } from "./lazyRoutes";

export const routes = [
  {
    id: "home",
    path: "/",
    name: "pages.home",
    exact: true,
    Component: Home,
  },
  {
    id: "home",
    path: "/search=:searchtext",
    name: "pages.home",
    exact: true,
    Component: SearchResult,
  },
];
