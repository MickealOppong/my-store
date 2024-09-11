import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  user: string,
  isActive: boolean
}
const initialState: stateType = {
  user: '',
  isActive: true,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state) => {
      state.isActive = true;
    },

    logout: (state) => {
      state.isActive = false;
    }
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;