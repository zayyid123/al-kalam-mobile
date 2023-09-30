import { axiosInstance } from "../config/fetchAxios";

export const GetAllDataSurah = async () => {
    const response = axiosInstance.get(`/api/surah`);
    return response;
};

export const GetDetailSurah = async (id) => {
    const response = axiosInstance.get(`/api/surah/${id}`);
    return response;
};