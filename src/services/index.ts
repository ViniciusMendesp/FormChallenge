import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3333",
});

export const setAuthentication = (accessToken: string) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export const removeAuthentication = () => {
  api.defaults.headers.common["Authorization"] = "";
};
