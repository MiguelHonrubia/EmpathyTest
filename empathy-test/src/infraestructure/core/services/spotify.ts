import Api from "./api";

const requestOptions = {
  baseUrl: process.env.API_URL,
  defaultOptions: {},
};

const api = new Api(requestOptions);

export const search = (searchText) => {
  return api.get(`/search?query=${searchText}&type=album,artist,track`);
};
