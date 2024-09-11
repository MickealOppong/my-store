import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  showMenu: boolean
}
const initialState: stateType = {
  showMenu: false
}

const cartSlice = createSlice({
  name: 'userMenu',
  initialState,
  reducers: {
    showUserMenu: (state) => {
      state.showMenu = true;
    },

    hideUserMenu: (state) => {
      state.showMenu = false;
    }
  }
})

export const { showUserMenu, hideUserMenu } = cartSlice.actions;
export default cartSlice.reducer;