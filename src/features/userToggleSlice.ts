import { createSlice } from "@reduxjs/toolkit";

type stateType = {
  showMenu: boolean,
  showEmail: boolean,
  showTelephone: boolean,
  isNavbarFixed: boolean,
  showAddressForm: boolean,
  showCompanyAddressForm: boolean,
}
const initialState: stateType = {
  showMenu: false,
  showEmail: false,
  showTelephone: false,
  isNavbarFixed: false,
  showAddressForm: false,
  showCompanyAddressForm: false,
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
    },
    fixedNavbar: (state) => {
      state.isNavbarFixed = true;
    },
    releaseNavbar: (state) => {
      state.isNavbarFixed = false;
    },
    showAddressForm: (state) => {
      state.showAddressForm = true;
    },
    hideAddressForm: (state) => {
      state.showAddressForm = false;
    },
    showCompanyAddressForm: (state) => {
      state.showCompanyAddressForm = true;
    },
    hideCompanyAddressForm: (state) => {
      state.showCompanyAddressForm = false;
    },

  }
})

export const { showNavMenu, hideNavMenu, showEmailContainer
  , hideEmailContainer, showTelephoneContainer
  , hideTelephoneContainer, fixedNavbar, releaseNavbar, showAddressForm, hideAddressForm, showCompanyAddressForm, hideCompanyAddressForm } = userMenuSlice.actions;
export default userMenuSlice.reducer;