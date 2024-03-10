import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bag/bagSlice";
import aviableAlertReducer from './notAviableProducCount/aviableAlertSlice'

export const store = configureStore({
  reducer: {
    bag: bagReducer,
    aviableAlert: aviableAlertReducer,
  },
});