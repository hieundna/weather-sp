import { createContext, useCallback, useContext, useReducer } from 'react';
import { rootReducer, initialState } from './reducers/rootReducer'

const Context = createContext({});

export const AppProvider = props => {
    const { children } = props;
    const [data, dispatch] = useReducer(rootReducer, initialState);
    return (
        <Context.Provider value={{ data, setData: dispatch }}>
            {children}
        </Context.Provider>
    )
}

export const useAppContext = () => {
    const { data, setData } = useContext(Context)

    const dispatch = useCallback(
        ({ type, payload }) => {
            setData({ payload, type })
        },
        [setData]
    )
    return [data, dispatch]
}

export default Context;