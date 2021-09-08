import { AlbumType } from "./Album";
import { ArtistType } from "./Artist";
import { TrackType } from "./Track";

export type SearchResultType = {
  albums: AlbumType;
  artists: ArtistType;
  tracks: TrackType;
};
