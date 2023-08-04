import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incearse = () => {
    setCounter(prevCounter => {
      return prevCounter + 1;
    });
  };
  const decearse = () => {
    setCounter(prevCounter => {
      return prevCounter - 1;
    });
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={decearse}>-</button>
      <button onClick={incearse}>+</button>
    </>
  );
};

export default Counter;
