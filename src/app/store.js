import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "../features/money/moneySlice";

export const store = configureStore({
  reducer: {
    money: moneyReducer,
  },
});
