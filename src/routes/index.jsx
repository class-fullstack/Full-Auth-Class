import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LayoutGlobal from "../layouts/layoutGlobal";
import ErrorPage from "../pages/error-page";
import NotFound from "../pages/not-found";
import authRoutes from "./authRoutes";
import mainRoutes from "./mainRoutes";

const routes = [
  {
    path: "/",
    element: <LayoutGlobal />,
    errorElement: <ErrorPage />,
    children: [
      // Main Routes
      mainRoutes,
      // Auth Routes
      authRoutes,
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export default router;
