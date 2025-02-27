import { combineReducers } from "redux";
import authReducer from "./authReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;
