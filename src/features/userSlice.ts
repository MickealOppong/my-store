import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/TUser";







const initialState: TUser = {
  id: 0,
  username: '',
  firstName: '',
  lastName: '',
  telephone: '',
  isActive: false,
  accessToken: '',
  token: ''
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      const { firstName, lastName, id, username, telephone, token } = payload
      state.firstName = firstName;
      state.lastName = lastName;
      state.id = id;
      state.username = username;
      state.isActive = true;
      state.telephone = telephone;
      state.token = token
    },

    logoutUser: (state) => {
      state.firstName = ''
      state.lastName = '';
      state.id = 0;
      state.username = '';
      state.isActive = false
      sessionStorage.removeItem('uat')
    },
    updateToken: (state, { payload }) => {
      const { firstName, lastName, id, username, telephone, token } = payload
      state.firstName = firstName;
      state.lastName = lastName;
      state.id = id;
      state.username = username;
      state.isActive = true;
      state.telephone = telephone;
      state.token = token
    }
  }
})

export const { loginUser, logoutUser, updateToken } = userSlice.actions;
export default userSlice.reducer;