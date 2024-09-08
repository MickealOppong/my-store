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
      state.showMenu = !state.showMenu;
    }
  }
})

export const { showUserMenu } = cartSlice.actions;
export default cartSlice.reducer;