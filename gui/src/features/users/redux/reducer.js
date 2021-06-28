import { combineReducers } from "redux";
import { usersListSlice } from "./slices";

export const usersReducer = combineReducers({
  usersList: usersListSlice.reducer,
});
