import WithPublic from "../guards/withPublic";
import LayoutAuth from "../layouts/layoutAuth";
import lazyLoader from "./lazyLoader";

const Login = lazyLoader(() => import("../pages/auth/login"));
const Register = lazyLoader(() => import("../pages/auth/register"));
const ForgetPassword = lazyLoader(() => import("../pages/auth/forget"));

const authRoutes = {
  path: "auth",
  element: (
    <WithPublic>
      <LayoutAuth />
    </WithPublic>
  ),
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "forget",
      element: <ForgetPassword />,
    },
  ],
};

export default authRoutes;
