import React, { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./reducer";
import { data } from '../misc/dummy.data';

const customContext = createContext();

const initial = {
    type: 'select',
    size: 'size',
    searchQuery: '',
    data,
    cart: [],
    totalBill: 0
}

export const GlobalProvider = ({ children })=>{

    const [state, dispatch] = useReducer(reducer, initial);
    const [checkedState, setCheckedState] = useState(
        new Array(data.length).fill({ amount: '', selected: false })
    );


    return <customContext.Provider  value={{ ...state, dispatch, checkedState, setCheckedState }}>
        { children }
    </customContext.Provider>
}


export const GlobalContext = () => useContext(customContext);