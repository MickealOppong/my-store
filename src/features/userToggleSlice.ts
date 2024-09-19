import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  showMenu: boolean,
  showEmail: boolean,
  showTelephone: boolean
}
const initialState: stateType = {
  showMenu: false,
  showEmail: false,
  showTelephone: false
}

const userMenuSlice = createSlice({
  name: 'userMenu',
  initialState,
  reducers: {
    showNavMenu: (state) => {
      state.showMenu = true;
    },

    hideNavMenu: (state) => {
      state.showMenu = false;
    },
    showEmailContainer: (state) => {
      state.showEmail = true;
    },
    hideEmailContainer: (state) => {
      state.showEmail = false;
    },
    showTelephoneContainer: (state) => {
      state.showTelephone = true;
    },
    hideTelephoneContainer: (state) => {
      state.showTelephone = false;
    }


  }
})

export const { showNavMenu, hideNavMenu, showEmailContainer
  , hideEmailContainer, showTelephoneContainer
  , hideTelephoneContainer } = userMenuSlice.actions;
export default userMenuSlice.reducer;