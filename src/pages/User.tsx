import { Store } from "@reduxjs/toolkit";
import { Outlet, redirect, useNavigation } from "react-router-dom";
import { Loading, UserMenuContainer } from "../components";
import Wrapper from "../css/User";
import { loginUser } from "../features/userSlice";
import { getAccountFromLocalStorage, getFromLocalStorage } from "../util/util";


export const loader = (store: Store) => async () => {

  const user = getAccountFromLocalStorage()
  if (user) {
    store.dispatch(loginUser(user))
    const expiredAt = getFromLocalStorage('_tkExp') as string
    const expiredAtInMinutes = new Date(expiredAt).getTime()
    const currentTime = Date.now()
    const isExpired = ((expiredAtInMinutes - currentTime) / 60000) < 1

    if (isExpired) {
      return redirect('/login')
    }
  } else {
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