import { Store } from "@reduxjs/toolkit";
import { Outlet, redirect, useNavigation } from "react-router-dom";
import { Loading, UserMenuContainer } from "../components";
import Wrapper from "../css/User";


export const loader = (store: Store) => async () => {
  const username = store.getState().userSlice.username
  if (!username) {
    return redirect('/login')
  }
  return null;
}


const User = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'



  return <Wrapper >
    <div className="parent">
      <div className="side-menu">
        <UserMenuContainer />
      </div>
      <section className="outlet">
        {isLoading ? <Loading /> : <Outlet />}
      </section>
    </div>
  </Wrapper>
}
export default User;