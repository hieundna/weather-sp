import { getWeatherInfor } from "./action";
import { GET_WEATHER_INFOR } from '../const/actionTypes'
import { data } from './data'

describe("getData", () => {
    test("Call action equal payload test successfull", async () => {
        const response = await getWeatherInfor({data});
        const payload = response.payload
        expect(payload).toEqual({ data });
    })
    test("Call action equal type test successfull", async () => {
        const response = await getWeatherInfor({data});
        const type = response.type
        expect(type).toEqual(GET_WEATHER_INFOR);
    })
})