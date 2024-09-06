import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemsInCart: 0,
  cartTotal: 0,
  shipping: 200,
  tax: 0,
  orderTotal: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {


  }
})


export default cartSlice.reducer;