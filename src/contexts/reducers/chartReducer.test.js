import { chartReducer, initialState } from './chartReducer'
import { GET_WEATHER_INFOR } from "../const/actionTypes";

describe("Reducer test", () => {
    test("Get reducer data from action type test successfull", async () => {
        const updateAction = {type: GET_WEATHER_INFOR, payload: { state: 'good'}};
        const updateState = chartReducer(initialState, updateAction);
        expect(updateState).toEqual({...initialState, weather: {state: 'good'}});
    })
    test("Get reducer data from default test successfull", async () => {
        const updateAction = {type: 'default', payload: {weather: 'cloud'}};
        const updateState = chartReducer(initialState, updateAction);
        expect(updateState).toEqual(initialState);
    })
})