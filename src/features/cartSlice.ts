import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartQuantity: 0
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setNumberOfItem: (state, payload) => {
      const total = payload.payload;
      state.cartQuantity = total
    },
  }
})

export const { setNumberOfItem } = cartSlice.actions;
export default cartSlice.reducer;