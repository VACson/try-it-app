import { DefaultApi } from "./api";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "123",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
axiosInstance.interceptors.request.use(
  (config) => {
    const token = "123";
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const api_client = new DefaultApi(undefined, "321", axiosInstance);

export default api_client;
