import { useMemo } from "react";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../redux";

export const useAppStore = () =>
  useMemo(
    () =>
      configureStore({
        reducer: rootReducer,
      }),
    []
  );
