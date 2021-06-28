import { usersListSlice } from "./slices";
import { ApiHelpers } from "core/api";

export const {
  setUserCards,
  clearUsernames,
  addFollowing,
  addFollowingMultiple,
  setLoading,
  setErrors,
  clearErrors,
} = usersListSlice.actions;

export const searchUsers = (usernameQuery) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearErrors());

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let responseData = null;

  try {
    await fetch(ApiHelpers.composeUrl("users", usernameQuery), requestOptions)
      .then((res) =>
        res.json().then((data) => ({ code: res.status, body: data }))
      )
      .then((data) => (responseData = data));
    console.log(usernameQuery);

    if (ApiHelpers.isSuccess(responseData)) {
      console.log(responseData.body);
      dispatch(setUserCards(responseData.body));
    } else {
      //dispatch(setErrors(responseData));
    }
  } catch (error) {
    // dispatch(setErrors(error));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const follow = (username, userToFollow) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearErrors());

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, follows: userToFollow }),
  };

  let responseData = [];

  try {
    await fetch(ApiHelpers.composeUrl("users/follow"), requestOptions)
      .then((res) =>
        res.json().then((data) => ({ code: res.status, body: data }))
      )
      .then((data) => (responseData = data));

    if (ApiHelpers.isSuccess(responseData)) {
      dispatch(addFollowing(userToFollow));
    } else {
      dispatch(setErrors(responseData));
    }
  } catch (error) {
    dispatch(setErrors(error));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const getFollowed = (username) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearErrors());

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let responseData = null;

  try {
    await fetch(
      ApiHelpers.composeUrl("users/following", username),
      requestOptions
    )
      .then((res) =>
        res.json().then((data) => ({ code: res.status, body: data }))
      )
      .then((data) => (responseData = data));

    if (ApiHelpers.isSuccess(responseData)) {
      dispatch(addFollowingMultiple(responseData.body.following));
    } else {
      dispatch(setErrors(responseData));
    }
  } catch (error) {
    dispatch(setErrors(error));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

export const UsersListActions = {
  searchUsers,
  follow,
  getFollowed,
};
