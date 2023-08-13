import React from 'react';
import { createContext } from 'react';
export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const sayHello = name => {
    console.log(`Hello ${name}`);
  };
  const contextValue = { name: 'Nastya', info: 23, sayHello };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
