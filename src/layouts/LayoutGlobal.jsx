import React from "react";
import { Outlet } from "react-router-dom";
import GlobalProvider from "../contexts/globalProviders";

const LayoutGlobal = () => {
  return (
    <React.Fragment>
      <GlobalProvider>
        <Outlet />
      </GlobalProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;
