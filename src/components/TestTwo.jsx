import { MyContext } from 'Context/ContextProvider';
import React from 'react';
import { useContext } from 'react';

export const TestTwo = () => {
  const { name } = useContext(MyContext);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
