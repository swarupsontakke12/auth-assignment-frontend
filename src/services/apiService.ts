import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URI,
  headers: {
    "Content-Type": "application/json",
  },
});

export const httpPost = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "An error occurred");
    }
    throw new Error("Network error");
  }
};

export default api;
