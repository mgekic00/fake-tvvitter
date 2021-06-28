import { combineReducers } from "redux";
import { authReducer } from "features/auth";
import { usersReducer } from "features/users/redux/reducer";
import { postsReducer } from "features/posts";
//import { homeReducer } from "features/home";

const appReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  posts: postsReducer,
  //home: homeReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "loginInfo/logout") {
    state = undefined;
  }

  return appReducer(state, action);
};
