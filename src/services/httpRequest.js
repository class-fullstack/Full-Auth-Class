import axiosInstance from "../libs/axiosInterceptor";

export const getAxios = async (url, params = {}, config = {}) => {
  const response = await axiosInstance.get(url, { params, ...config });
  return response.data;
};

export const postAxios = async (url, data = {}, config = {}) => {
  const response = await axiosInstance.post(url, data, config);
  return response.data;
};
