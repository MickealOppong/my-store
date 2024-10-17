import { createSlice } from "@reduxjs/toolkit";



export type UserType = {
  id: number,
  username: string,
  firstName: string,
  lastName: string,
  number: string,
  isActive: boolean
}



const initialState: UserType = {
  id: 0,
  username: '',
  firstName: '',
  lastName: '',
  number: '',
  isActive: false
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const { firstName, lastName, id, username } = payload
      state.firstName = firstName;
      state.lastName = lastName;
      state.id = id;
      state.username = username;
      state.isActive = true;
    },

    logout: (state) => {
      state.firstName = ''
      state.lastName = '';
      state.id = 0;
      state.username = '';
      state.isActive = false
    }
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;