import axios from "axios";
import { API_KEY, getWeatherData } from "./index";
import { data } from './data'
jest.mock("axios");

describe("getData", () => {
    test("fetch API test successfull", async () => {
        axios.get.mockResolvedValue({ data });
        await expect(getWeatherData('Singapore')).resolves.toEqual({ data });

        expect(axios.get).toHaveBeenCalledWith(
            `https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${API_KEY}&units=metric`
        );
    })
    test("fetche API test expect failed", async () => {
        const errorMessage = "Network Error";

        axios.get.mockRejectedValue(new Error(errorMessage));

        await expect(getWeatherData("Singapore")).rejects.toThrow(errorMessage);
    });
})