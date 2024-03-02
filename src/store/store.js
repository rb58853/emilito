import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bag/bagSlice";

export const store = configureStore({
  reducer: {
    bag: bagReducer,
  },
});