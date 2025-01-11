import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartQuantity: localStorage.getItem('_cart') ? localStorage.getItem('_cart') : 0
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartQuantity: (state, payload) => {
      const total = payload.payload;
      state.cartQuantity = total
      localStorage.setItem('_cart', total)
    },
  }
})

export const { setCartQuantity } = cartSlice.actions;
export default cartSlice.reducer;