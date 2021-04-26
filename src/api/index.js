import axios from 'axios';
export const API_KEY = '92ae361d56eed38547fc11b1e3003857';
export const getWeatherData = async (location) => {
    const URL = encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
    return await axios.get(URL);
}