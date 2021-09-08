import Api from "./authApi";

const requestOptions = {
  baseUrl: process.env.API_AUTHENTICATION_URL,
  defaultOptions: {},
};

const api = new Api(requestOptions);

export const buildRequest = (body: any): URLSearchParams => {
  const urlParams = new URLSearchParams();

  for (const f in body) {
    if (Object.prototype.hasOwnProperty.call(body, f)) {
      if (body[f] != undefined && body[f] != "") {
        if (Array.isArray(body[f])) {
          body[f].forEach((elem) => {
            urlParams.append(f, elem);
          });
        } else {
          urlParams.append(f, body[f]);
        }
      }
    }
  }

  return urlParams;
};

export const getAccessToken = (body) => {
  const q = buildRequest(body);
  return api.post(`?${q}`, {});
};
