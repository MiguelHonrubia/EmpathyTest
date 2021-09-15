import Api from "./api";

const requestOptions = {
  baseUrl: process.env.API_URL,
  defaultOptions: {},
};

const api = new Api(requestOptions);

export const search = (searchText) =>
  api.get(`/search?query=${searchText}&type=album,artist,track`);

export const getArtist = (id) => api.get(`/artists/${id}`);

export const getAlbum = (id) => api.get(`/albums/${id}`);

export const getTrack = (id) => api.get(`/tracks/${id}`);

export const getTopTracksByArtistId = (id) =>
  api.get(`/artists/${id}/top-tracks?market=es`);

export const getAlbumsByArtistId = (id) => api.get(`/artists/${id}/albums`);

export const getNewReleases = () => api.get("/browse/new-releases");
export const getRecommendations = () => api.get("/recommendations");
