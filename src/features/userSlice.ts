import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/TUser";
import { getAccountFromLocalStorage, saveAccountToLocalStorage, saveToLocalStorage } from "../util/util";


const defState: TUser = {
  id: -1,
  username: '',
  firstName: '',
  lastName: '',
  telephone: '',
  isActive: false,
  tokenDto: {
    accessToken: '',
    token: '',
    expiredAt: '',
    issuedAt: ''
  }
}


const user = getAccountFromLocalStorage() ?? defState

const initialState: TUser = {
  id: user.id,
  username: user.username,
  firstName: user.firstName,
  lastName: user.lastName,
  telephone: user.telephone,
  isActive: false,
  tokenDto: {
    accessToken: user.tokenDto.accessToken,
    token: user.tokenDto.token,
    expiredAt: user.tokenDto.expiredAt,
    issuedAt: user.tokenDto.issuedAt
  }
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      if (payload) {
        const { firstName, lastName, id, username, telephone, tokenDto } = payload
        const { accessToken, token, expiredAt, issuedAt } = tokenDto
        state.firstName = firstName;
        state.lastName = lastName;
        state.id = id;
        state.username = username;
        state.isActive = true;
        state.telephone = telephone;
        state.tokenDto.accessToken = accessToken;
        state.tokenDto.token = token;
        state.tokenDto.expiredAt = expiredAt;
        state.tokenDto.issuedAt = issuedAt;
        saveAccountToLocalStorage(payload)
        saveToLocalStorage('_tkExp', tokenDto.expiredAt)
        saveToLocalStorage('_uat', tokenDto.accessToken)
        saveToLocalStorage('_utk', tokenDto.token)
      }
    },
    updateUser: (state, { payload }) => {
      if (payload) {
        const { id, firstName, lastName, username, telephone } = payload
        //update state
        state.firstName = firstName;
        state.lastName = lastName;
        state.telephone = telephone;
        state.id = id;
        state.username = username;
        //update local storage
        const account = getAccountFromLocalStorage() as TUser;
        account.firstName = firstName;
        account.lastName = lastName;
        account.telephone = telephone;
        account.username = username;
        saveAccountToLocalStorage(account)
      }
    },
    updateTelephone: (state, { payload }) => {
      if (payload) {
        const telephone = payload
        //update state

        state.telephone = telephone;
        //update local storage
        const account = getAccountFromLocalStorage() as TUser;
        account.telephone = telephone;
        saveAccountToLocalStorage(account)
      }
    },
    logoutUser: (state) => {
      state.firstName = ''
      state.lastName = '';
      state.id = -1;
      state.username = '';
      state.isActive = false
      sessionStorage.removeItem('uat')
      localStorage.removeItem('account')
    },
  }
})

export const { loginUser, logoutUser, updateUser, updateTelephone } = userSlice.actions;
export default userSlice.reducer;