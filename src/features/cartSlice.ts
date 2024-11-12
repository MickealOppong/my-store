import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartQuantity: 0
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setNumberOfItem: (state, payloaad) => {
      const total = payloaad.payload;
      state.cartQuantity = total
    },
  }
})

export const { setNumberOfItem } = cartSlice.actions;
export default cartSlice.reducer;