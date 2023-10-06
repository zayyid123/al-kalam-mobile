import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master",
});

axiosInstance.interceptors.request.use((config) => {
    return config;
});