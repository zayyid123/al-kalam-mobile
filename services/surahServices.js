import { axiosInstance } from "../config/fetchAxios";

export const GetAllDataKota = async () => {
    const response = axiosInstance.get(`/kota.json`);
    return response;
};

export const GetAllDataAdzan = async (city, tahun, bulan) => {
    const response = axiosInstance.get(`/adzan/${city}/${tahun}/${bulan}.json`);
    return response;
};