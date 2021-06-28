import { createSlice } from "@reduxjs/toolkit";

const loginInfoInitialState = {
  userId: null,
  username: "",
  isLoggedIn: false,
  isLoading: false,
  wrongCredentials: false,
  errors: [],
};

export const loginInfoSlice = createSlice({
  name: "loginInfo",
  initialState: loginInfoInitialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = [];
    },
    setWrongCredentials: (state, action) => {
      state.wrongCredentials = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});
