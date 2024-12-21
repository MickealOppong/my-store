import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  id: 0
}

const orderSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setOrderId: (state, payload) => {
      const id = payload.payload;
      state.id = id;
    },
  }
})

export const { setOrderId } = orderSlice.actions;
export default orderSlice.reducer;