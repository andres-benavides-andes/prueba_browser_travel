import axios from "axios";
import { OPEN_WEATHER_URL,OPEN_WEATHER_API_KEY } from ".";


export const getWeatherMap = (lat,lon) => {
  let params ={
    "lat":lat,
    "lon":lon,
    "appid":OPEN_WEATHER_API_KEY
  }

  return axios
    .get(`${OPEN_WEATHER_URL}`,{params})
    .then(( data ) => {
      return data;
    })
    .catch((err) => console.log(err));
};