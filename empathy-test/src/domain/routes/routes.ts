import {
  Home,
  SearchResult,
  ArtistResult,
  AlbumResult,
  TrackResult,
} from "./lazyRoutes";

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
  {
    id: "home",
    path: "/artist=:searchtext",
    name: "pages.artist",
    exact: true,
    Component: ArtistResult,
  },
  {
    id: "home",
    path: "/album=:searchtext",
    name: "pages.artist",
    exact: true,
    Component: AlbumResult,
  },
  {
    id: "home",
    path: "/track=:searchtext",
    name: "pages.artist",
    exact: true,
    Component: TrackResult,
  },
];
