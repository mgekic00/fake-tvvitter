import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import { useAppStore } from "../hooks";
import history from "../history";

export const AppProvider = ({ children }) => {
  const store = useAppStore();

  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
