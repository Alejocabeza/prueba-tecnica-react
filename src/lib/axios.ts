import axios, { AxiosInstance } from "axios";

export const Axios: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    "Content-Type": "application/json",
  },
});
