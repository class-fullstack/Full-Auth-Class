import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalProvider from "../contexts/globalProviders";

const LayoutGlobal = () => {
  return (
    <React.Fragment>
      {/* Toast */}
      <ToastContainer />

      {/* Global */}
      <GlobalProvider>
        <Outlet />
      </GlobalProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;

// UI: User Interface
// UX: User Experience
