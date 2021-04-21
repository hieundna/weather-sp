import { createContext } from 'react';
const initialState = {
    city: ['Ho Chi Minh', 'Vinh', 'Singapore']
}
const Context = createContext(initialState);

export default Context;