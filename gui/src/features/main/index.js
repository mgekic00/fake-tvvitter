import React from "react";
import ReactDOM from "react-dom";
import { App, AppProvider } from "./fragments";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
