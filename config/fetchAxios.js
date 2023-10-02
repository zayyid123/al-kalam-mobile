import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://web-api.qurankemenag.net",
});

axiosInstance.interceptors.request.use((config) => {
    return config;
});