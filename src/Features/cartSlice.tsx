import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "cart",
  cartList: [
    { productName: "Acer XM1", productPrice: 549 },
    { productName: "Acer XM2", productPrice: 349 },
    { productName: "Acer XM3", productPrice: 249 },
  ],
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: initialStateValue },
  reducers: {
    addToCart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
