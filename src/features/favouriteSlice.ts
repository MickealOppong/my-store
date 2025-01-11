import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  counter: 0
}

const favouriteSlice = createSlice({
  name: 'favouriteSlice',
  initialState,
  reducers: {
    updateFavouriteCounter: (state, { payload }: { payload: number }) => {
      const counter = payload;
      state.counter = counter;
    },
  }
})

export const { updateFavouriteCounter } = favouriteSlice.actions;
export default favouriteSlice.reducer