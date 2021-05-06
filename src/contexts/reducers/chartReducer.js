import { GET_WEATHER_INFOR } from '../const/actionTypes'

export const initialState = {
    city: ['Ho Chi Minh', 'Vinh', 'Singapore'],
    weather: {
        weather: [
            {
                main: "Clouds",
                icon: "03n"
            }
        ],
        main: {
            temp: 28,
            feels_like: 32.57,
            humidity: 83
        }
    },
    chartData: [
        { hour: '12 a.m', tide: 2.9, sun: 0 },
        { hour: '2 a.m', tide: 2.8, sun: 0 },
        { hour: '4 a.m', tide: 2.5, sun: 0 },
        { hour: '6 a.m', tide: 2, sun: 0.001 },
        { hour: '8 a.m', tide: 1.5, sun: 1.6 },
        { hour: '10 a.m', tide: 1, sun: 3.4 },
        { hour: '12 p.m', tide: 0.7, sun: 4.1 },
        { hour: '2 p.m', tide: 1, sun: 3.4 },
        { hour: '4 p.m', tide: 1.5, sun: 1.6 },
        { hour: '6 p.m', tide: 2, sun: 0.001 },
        { hour: '8 p.m', tide: 2.5, sun: 0 },
        { hour: '10 p.m', tide: 2.8, sun: 0 },
        { hour: '12 a.m', tide: 2.9, sun: 0 },
        { hour: '2 a.m', tide: 2.8, sun: 0 },
        { hour: '4 a.m', tide: 2.5, sun: 0 },
        { hour: '6 a.m', tide: 2, sun: 0.001 },
        { hour: '8 a.m', tide: 1.5, sun: 1.6 },
        { hour: '10 a.m', tide: 1, sun: 3.4 },
        { hour: '12 p.m', tide: 0.7, sun: 4.1 },
        { hour: '2 p.m', tide: 1, sun: 3.4 },
        { hour: '4 p.m', tide: 1.5, sun: 1.6 },
        { hour: '6 p.m', tide: 2, sun: 0.001 },
        { hour: '8 p.m', tide: 2.5, sun: 0 },
        { hour: '10 p.m', tide: 2.8, sun: 0 },
        { hour: '12 a.m', tide: 2.9, sun: 0 },
        { hour: '2 a.m', tide: 2.8, sun: 0 },
        { hour: '4 a.m', tide: 2.5, sun: 0 },
        { hour: '6 a.m', tide: 2, sun: 0.001 },
        { hour: '8 a.m', tide: 1.5, sun: 1.6 },
        { hour: '10 a.m', tide: 1, sun: 3.4 },
        { hour: '12 p.m', tide: 0.7, sun: 4.1 },
        { hour: '2 p.m', tide: 1, sun: 3.4 },
        { hour: '4 p.m', tide: 1.5, sun: 1.6 },
        { hour: '6 p.m', tide: 2, sun: 0.001 },
        { hour: '8 p.m', tide: 2.5, sun: 0 },
        { hour: '10 p.m', tide: 2.8, sun: 0 },
        { hour: '12 a.m', tide: 2.9, sun: 0 }
    ]
}

export const chartReducer = (state, action = {}) => {
    switch (action.type) {
        case GET_WEATHER_INFOR:
            return {
                ...state,
                weather: action.payload
            }
        default:
            return state
    }
}