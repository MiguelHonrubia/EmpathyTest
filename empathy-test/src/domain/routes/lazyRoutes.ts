import * as React from "react";

export const Home = React.lazy(() => import("../layouts/Index"));
export const SearchResult = React.lazy(() => import("../layouts/SearchResult"));
export const ArtistResult = React.lazy(() => import("../layouts/ArtistResult"));
export const AlbumResult = React.lazy(() => import("../layouts/AlbumResult"));
export const TrackResult = React.lazy(() => import("../layouts/TrackResult"));
