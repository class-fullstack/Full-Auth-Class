import React from "react";

import LayoutPage from "../layouts/LayoutPage";
import lazyLoader from "./lazyLoader";

const Home = lazyLoader(() => import("../pages/Home"), 0); // 5 seconds delay
const About = lazyLoader(() => import("../pages/About"));

const mainRoutes = {
  path: "/",
  element: <LayoutPage />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
  ],
};

export default mainRoutes;
