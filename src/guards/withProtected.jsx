import { Navigate } from "react-router-dom";
import { keyLocalStorage } from "../constants/keyConstant";
import { getFromLocalStorage } from "../utils/localStorage";

const WithProtected = ({ children }) => {
  const accessToken = getFromLocalStorage(keyLocalStorage.accessToken);

  if (!accessToken) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default WithProtected;
