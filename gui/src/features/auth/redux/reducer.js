import { combineReducers } from "redux";
import { loginInfoSlice } from "./slices";

export const authReducer = combineReducers({
  loginInfo: loginInfoSlice.reducer,
});
