import React from "react";
import { Outlet } from "react-router-dom";

const layoutAuth = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default layoutAuth;
