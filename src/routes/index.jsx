import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LayoutGlobal from "../layouts/layoutGlobal";
import NotFound from "../pages/NotFound";
import authRoutes from "./authRoutes";
import mainRoutes from "./mainRoutes";

const routes = [
  {
    path: "/",
    element: <LayoutGlobal />,
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
