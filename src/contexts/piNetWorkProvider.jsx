import React from "react";
import { DigPiReducer } from "../redux/pinetwork";

export const PiNetWorkContext = React.createContext();

const PiNetWorkProvider = ({ children }) => {
  const initialState = { count: 0 };
  const [state, dispatch] = React.useReducer(DigPiReducer, initialState);

  PiNetWorkContext.displayName = "UserReducer + UserContext";

  const data = { state, dispatch };
  return (
    <PiNetWorkContext.Provider value={data}>
      {children}
    </PiNetWorkContext.Provider>
  );
};

export default PiNetWorkProvider;
