import { loginInfoSlice } from "./slices";
import { ApiHelpers } from "core/api";
import history from "features/main/history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const {
  setUsername,
  setUserId,
  loginSuccess,
  setLoading,
  setErrors,
  clearErrors,
  setWrongCredentials,
  logout,
} = loginInfoSlice.actions;

export const register = (username, password) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearErrors());

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  let responseData = [];

  try {
    await fetch(ApiHelpers.composeUrl("auth/register"), requestOptions)
      .then((res) =>
        res.json().then((data) => ({ code: res.status, body: data }))
      )
      .then((data) => (responseData = data));

    if (ApiHelpers.isSuccess(responseData)) {
      toast.success("Registered successfully!");

      history.push("/auth/login");
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

export const login = (username, password) => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(clearErrors());
  dispatch(setWrongCredentials(false));

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  let responseData = [];

  try {
    await fetch(ApiHelpers.composeUrl("auth/login"), requestOptions)
      .then((res) =>
        res.json().then((data) => ({ code: res.status, body: data }))
      )
      .then((data) => {
        responseData = data;
        dispatch(setUsername(username));
      });

    if (ApiHelpers.isSuccess(responseData)) {
      dispatch(loginSuccess());
      dispatch(setUserId(responseData.body.userId));
    } else {
      console.log(responseData);
      if (responseData.code === 400) {
        dispatch(setWrongCredentials(true));
      }
      dispatch(setErrors(responseData));
    }
  } catch (error) {
    dispatch(setErrors(error));
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
};

const handleLogout = () => (dispatch) => {
  dispatch(logout());
};

export const AuthActions = {
  register,
  login,
  handleLogout,
};
