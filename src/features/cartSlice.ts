import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isInvalidated: false,
}

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    invalidateFetch: (state) => {
      state.isInvalidated = true;
    },

    clearInvalidation: (state) => {
      state.isInvalidated = false;
    },
  }
})

export const { invalidateFetch, clearInvalidation } = cartSlice.actions;
export default cartSlice.reducer;