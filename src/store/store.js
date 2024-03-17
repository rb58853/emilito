import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./bag/bagSlice";
import userReducer from './user/userSlice'
import aviableAlertReducer from './notAviableProducCount/aviableAlertSlice'

export const store = configureStore({
  reducer: {
    bag: bagReducer,
    user: userReducer,
    aviableAlert: aviableAlertReducer,
  },
});