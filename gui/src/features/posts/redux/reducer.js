import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  startLoading,
  stopLoading,
  storePosts,
  storeErrors,
  clearErrors,
} from "./actions";

const loading = createReducer(false, (builder) =>
  builder.addCase(startLoading, () => true).addCase(stopLoading, () => false)
);

const storage = createReducer({}, (builder) =>
  builder.addCase(storePosts, (draft, action) => {
    action.payload.forEach((post) => {
      draft[post.postId] = post;
    });
  })
);

const allPostIds = createReducer([], (builder) =>
  builder.addCase(storePosts, (_state, action) =>
    action.payload.map((p) => p.postId)
  )
);

const errors = createReducer([], (builder) =>
  builder
    .addCase(storeErrors, (state, action) => [...state, ...action.payload])
    .addCase(clearErrors, () => [])
);

export const reducer = combineReducers({
  loading,
  storage,
  allPostIds,
  errors,
});
