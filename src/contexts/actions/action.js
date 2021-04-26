import { GET_WEATHER_INFOR } from '../const/actionTypes'

export const getWeatherInfor = res => ({
    type: GET_WEATHER_INFOR,
    payload: res
})