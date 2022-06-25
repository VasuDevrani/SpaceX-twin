import React, { useContext } from 'react';
import { createContext, useReducer } from 'react';

// data layer
export const StateContext = createContext();

// exporter or provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);
