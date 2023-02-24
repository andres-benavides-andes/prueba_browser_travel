import axios from "axios";
import { API_URL } from ".";


export const saveHistory = async (params) => {
  return axios
    .post(`${API_URL}/historic`,params)
    .then(( data ) => {
      let save = false
      if (data.status===201){
        save = true
      }
      return save;
    })
    .catch((err) => {
      return false;
    });
};

export const getHistorics = async () => {
  return axios
    .get(`${API_URL}/historic`)
    .then(({ data }) => {
      return data;
    })
    .catch((err) => console.log(err));
};
