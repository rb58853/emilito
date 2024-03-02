import { createSlice } from "@reduxjs/toolkit";
import { BagIsEmpty, BagProducts } from "../../components/bag/localStorageFunctions";

const initialState = {
  empty: BagIsEmpty(),
  products: BagProducts(),
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    setEmpty: (state, action) => {
      state.empty = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setEmpty, setProducts } = bagSlice.actions;
export default bagSlice.reducer;