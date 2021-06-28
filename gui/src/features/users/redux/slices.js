import { createSlice } from "@reduxjs/toolkit";

const usersListInitialState = {
  userCards: [],
  followers: [],
  following: [],
  isLoading: false,
  errors: [],
};

export const usersListSlice = createSlice({
  name: "usersList",
  initialState: usersListInitialState,
  reducers: {
    setUserCards: (state, action) => {
      state.userCards = action.payload;
    },
    clearUsernames: (state) => {
      state.usernames = [];
    },
    addFollowing: (state, action) => {
      state.following.push(action.payload);
    },
    addFollowingMultiple: (state, action) => {
      // state.following = [...state.following, ...action.payload];
      action.payload.forEach((user, i) => {
        state.following[i] = user;
      });
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
  },
});
