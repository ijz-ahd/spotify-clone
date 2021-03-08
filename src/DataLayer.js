import React, { createContext, useContext, useReducer } from "react";

//prepares the dataLayer
const DataLayerContext = createContext();

//actual dataLayer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

//To access the values and to dispatch the datalayer
export const useDataLayerValue = () => useContext(DataLayerContext);
