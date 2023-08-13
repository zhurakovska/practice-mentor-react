import { MyContext } from 'Context/ContextProvider';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Test } from './Test';

export const App = () => {
  // const value = useRef();
  // const [state, setState] = useState(1);
  // const { name, info, sayHello } = useContext(MyContext);
  // console.log(name);
  // console.log(value);
  // console.log(value.current);
  // const nameH = 'hello';
  // console.log(name);
  // useEffect(() => {
  //   setTimeout(() => {
  //     value.current.value = name;
  //     sayHello('Ira');
  //   }, 3000);
  //   value.current.focus();
  // }, []);
  return (
    <div>
      <Test />
      {/* <input ref={value}></input>
      <button onClick={() => setState(prev => prev + 1)}>Click me</button> */}
    </div>
  );
};
