import { createAction } from "@reduxjs/toolkit";
import { ApiHelpers } from "core/api";

export const startLoading = createAction("posts/start-loading");
export const stopLoading = createAction("posts/stop-loading");
export const storePosts = createAction("posts/store-posts");
export const storeErrors = createAction("posts/store-errors");
export const clearErrors = createAction("posts/clear-errors");

const fetchPosts = (username) => async (dispatch) => {
  let responseData = [];

  try {
    dispatch(startLoading());
    dispatch(clearErrors());

    await fetch(ApiHelpers.composeUrl("posts", username), {
      method: "GET",
      headers: ApiHelpers.getDefaultHeaders(),
    })
      .then((res) =>
        res.json().then((data) => ({ code: res.status, body: data }))
      )
      .then((data) => {
        responseData = data;
        dispatch(storePosts(responseData.body));
        if (ApiHelpers.isSuccess(responseData)) {
          // dispatch(storePosts(responseData.body));
        } else {
          dispatch(storeErrors(responseData.body));
        }

        return responseData.body;
      });
  } catch (error) {
    dispatch(storeErrors([error]));

    return null;
  } finally {
    dispatch(stopLoading());
  }
};

export const PostsActions = {
  fetchPosts,
};
