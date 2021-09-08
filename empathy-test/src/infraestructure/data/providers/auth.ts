import { getAccessToken } from "../../core/services/auth";

export const fetchAccessToken = (body) => getAccessToken(body);
