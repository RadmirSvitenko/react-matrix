import axios from "axios";
import { getTokenFromCookies } from "cookies";

export const API_NOTEBOOKS = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const API_DUMMY = axios.create({
  baseURL: "https://dummyjson.com/",
});

API_NOTEBOOKS.interceptors.request.use(async (config) => {
  const customConfig = config;
  const token = getTokenFromCookies();

  if (token) {
    customConfig.headers.Authorization = token;
  }
  return customConfig;
});
