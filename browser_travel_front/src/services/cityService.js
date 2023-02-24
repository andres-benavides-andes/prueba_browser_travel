import axios from "axios";
import { API_URL } from ".";

export const getCities = async () => {
  return axios
    .get(`${API_URL}/cities`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};

export const getOneCity = async (citiId) => {
  return axios
    .get(`${API_URL}/cities/${citiId}`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};


