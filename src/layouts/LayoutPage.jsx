import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";

const LayoutPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

export default LayoutPage;
