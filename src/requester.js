import axios from "axios";

export const API_NOTEBOOKS = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const API_DUMMY_PRODUCTS = axios.create({
  baseURL: "https://dummyjson.com/",
});
