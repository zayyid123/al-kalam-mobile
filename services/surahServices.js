import { axiosInstance } from "../config/fetchAxios";

export const GetAllDataSurah = async () => {
    const response = axiosInstance.get(`/quran-ayah`);
    return response;
};

export const GetDetailSurah = async (id) => {
    const response = axiosInstance.get(`/quran-ayah?surah=${id}`);
    return response;
};