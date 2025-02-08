import React from "react";

export const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [state, setState] = React.useState({
    name: "John Doe",
    email: "a@gmail.com",
  });

  GlobalContext.displayName = "Teacher Tai";

  const data = { state, setState };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
