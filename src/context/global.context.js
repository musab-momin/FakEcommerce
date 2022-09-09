import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { data } from '../misc/dummy.data';

const customContext = createContext();

const initial = {
    type: 'select',
    size: 'size',
    searchQuery: '',
    data,
    cart: []
}

export const GlobalProvider = ({ children })=>{

    const [state, dispatch] = useReducer(reducer, initial);

    return <customContext.Provider  value={{ ...state, dispatch }}>
        { children }
    </customContext.Provider>
}


export const GlobalContext = () => useContext(customContext);