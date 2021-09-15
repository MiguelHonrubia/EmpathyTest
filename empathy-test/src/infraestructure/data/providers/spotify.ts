import {
  search,
  getAlbum,
  getArtist,
  getTrack,
  getNewReleases,
  getRecommendations,
  getTopTracksByArtistId,
  getAlbumsByArtistId,
} from "../../core/services/spotify";

export const fetchSearch = (searchText) => search(searchText);
export const fetchAlbum = (id) => getAlbum(id);
export const fetchArtist = (id) => getArtist(id);
export const fetchTopTracksByArtistId = (id) => getTopTracksByArtistId(id);
export const fetchAlbumsByArtistId = (id) => getAlbumsByArtistId(id);
export const fetchtrack = (id) => getTrack(id);
export const fetchNewReleases = () => getNewReleases();
export const fetchRecommendations = () => getRecommendations();
