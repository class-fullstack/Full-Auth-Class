import React from "react";
import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default LayoutPage;
