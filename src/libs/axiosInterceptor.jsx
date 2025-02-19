import axios from "axios";
import { keyLocalStorage } from "../constants/keyConstant";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let isRefreshing = false;
let refreshPromise = null;

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getFromLocalStorage(keyLocalStorage.accessToken);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;
        refreshPromise = axiosInstance
          .get("/auth/renew-token")
          .then((response) => {
            const { accessToken } = response.data;
            saveToLocalStorage(keyLocalStorage.accessToken, accessToken);
            return accessToken;
          })
          .catch((refreshError) => {
            deleteFromLocalStorage(keyLocalStorage.accessToken);
            return Promise.reject(refreshError);
          })
          .finally(() => {
            isRefreshing = false;
          });
      }

      try {
        const newToken = await refreshPromise;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
