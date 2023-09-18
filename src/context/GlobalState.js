import React, { createContext, useReducer } from "react";

//Intial state

const initialState = {
  transtraction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//Create context

export const GloableContext = createContext(initialState);

//Provider component
export const GlobaleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <GloableContext.Provider>{children}</GloableContext.Provider>;
};
