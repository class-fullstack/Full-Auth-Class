import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalProvider from "../contexts/globalProviders";
import store from "../redux/store";
const LayoutGlobal = () => {
  return (
    <React.Fragment>
      {/* Toast */}
      <ToastContainer />

      {/* Global */}
      <HelmetProvider>
        {/* Redux */}
        <Provider store={store}>
          <GlobalProvider>
            <Outlet />
          </GlobalProvider>
        </Provider>
      </HelmetProvider>
    </React.Fragment>
  );
};

export default LayoutGlobal;

// UI: User Interface
// UX: User Experience
