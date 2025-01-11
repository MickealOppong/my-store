import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  orderId: parseInt(localStorage.getItem('_order') as string) | 0
}

const orderSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setOrderId: (state, payload) => {
      const id = payload.payload;
      state.orderId = id;
      localStorage.setItem('_order', state.orderId.toString())
    },
  }
})

export const { setOrderId } = orderSlice.actions;
export default orderSlice.reducer;