import { createSelector } from "@reduxjs/toolkit";

const auth = (state) => state.auth;

const loginInfoStorage = createSelector(auth, (s) => s.loginInfo);

const getUsername = createSelector(loginInfoStorage, (s) => s.username);

const root = (state) => state.auth;

const isLoggedIn = (state) => !!root(state).loginInfo.isLoggedIn;

const userId = (state) => root(state).userId;

const username = (state) => root(state).loginInfo.username;

const wrongCredentials = (state) => root(state).loginInfo.wrongCredentials;

export const AuthSelectors = {
  isLoggedIn,
  userId,
  username,
  getUsername,
  wrongCredentials,
};
