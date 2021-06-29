import { createAction } from "@reduxjs/toolkit";
import { ApiHelpers } from "core/api";
import { toast } from "react-toastify";

export const startLoading = createAction("posts/start-loading");
export const stopLoading = createAction("posts/stop-loading");
export const storePosts = createAction("posts/store-posts");
export const storeErrors = createAction("posts/store-errors");
export const clearErrors = createAction("posts/clear-errors");

export const fetchPosts = (username) => async (dispatch) => {
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
        if (ApiHelpers.isSuccess(responseData)) {
          dispatch(storePosts(responseData.body));
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

export const createNewPost =
  (username, imgUri, content) => async (dispatch) => {
    dispatch(startLoading());
    dispatch(clearErrors());

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        imgUri: imgUri,
        content: content,
      }),
    };

    let responseData = [];

    try {
      await fetch(ApiHelpers.composeUrl("posts/create"), requestOptions)
        .then((res) =>
          res.json().then((data) => ({ code: res.status, body: data }))
        )
        .then((data) => {
          responseData = data;
          // dispatch(setUsername(username));
        });

      if (ApiHelpers.isSuccess(responseData)) {
        toast.success("Post created successfully!");
      } else {
        toast.error("An error occurred");
        dispatch(storeErrors(responseData.body));
      }
    } catch (error) {
      dispatch(storeErrors([error]));
      console.log(error);
    } finally {
      dispatch(stopLoading());
    }
  };

export const PostsActions = {
  fetchPosts,
  createNewPost,
};
