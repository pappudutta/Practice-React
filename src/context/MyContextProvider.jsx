import React from "react";
import MyContext from "./MyContext";

const MyContextProvider = ({ children }) => {
  const shareData = {
    title: "Hello from context",
    name: "Pappu Dutta",
    age: 27,
  };

  return <MyContext.Provider value={shareData}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
