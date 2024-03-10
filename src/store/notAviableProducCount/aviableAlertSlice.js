import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  alert:false,
}

export const aviableAlertSlice = createSlice({
  name: "aviableAlert",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
});

export const { setProduct, setAlert } = aviableAlertSlice.actions;
export default aviableAlertSlice.reducer;