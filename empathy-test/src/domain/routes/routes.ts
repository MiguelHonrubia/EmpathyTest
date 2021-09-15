import { Home, SearchResult, ArtistResult, AlbumResult } from "./lazyRoutes";

export const routes = [
  {
    id: "home",
    path: "/",
    name: "pages.home",
    exact: true,
    Component: Home,
  },
  {
    id: "result",
    path: "/search=:searchtext",
    name: "pages.home",
    exact: true,
    Component: SearchResult,
  },
  {
    id: "artist",
    path: "/artist=:searchtext",
    name: "pages.artist",
    exact: true,
    Component: ArtistResult,
  },
  {
    id: "album",
    path: "/album=:searchtext",
    name: "pages.artist",
    exact: true,
    Component: AlbumResult,
  },
];
