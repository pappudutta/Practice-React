import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [windowWidth]);

  return <h1>{windowWidth}</h1>;
};

export default UseEffect;
