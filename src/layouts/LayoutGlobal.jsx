import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalProvider from "../contexts/globalProviders";

const LayoutGlobal = () => {
  return (
    <React.Fragment>
      {/* Toast */}
      <ToastContainer />

      {/* Global */}
      <HelmetProvider>
        <GlobalProvider>
          <Outlet />
        </GlobalProvider>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;

// UI: User Interface
// UX: User Experience
