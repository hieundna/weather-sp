import { createContext } from 'react';
const initialState = {
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
    }
}
const Context = createContext(initialState);

export default Context;