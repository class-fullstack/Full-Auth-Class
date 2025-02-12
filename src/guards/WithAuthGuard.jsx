import { Navigate } from "react-router-dom";
import { keyLocalStorage } from "../constants/keyConstant";
import { getFromLocalStorage } from "../utils/localStorage";

const WithAuthGuard = ({ children }) => {
  const accessToken = getFromLocalStorage(keyLocalStorage.accessToken);

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return children;
};

export default WithAuthGuard;
