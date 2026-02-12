import axiosInstance from "./axiosInstance";

export const getApiQuery = async (URL) => {
  const response = await axiosInstance.get(URL);
  return response?.data;
};

// Post data
export const postApiQuery = async (url, data) =>
  await axiosInstance.post(url, data);
