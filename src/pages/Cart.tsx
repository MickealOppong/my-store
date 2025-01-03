import { Store } from "@reduxjs/toolkit";
import { QueryClient } from "@tanstack/react-query";
import { Outlet, redirect, useLoaderData, useNavigation } from "react-router-dom";
import styled from "styled-components";
import emptyBag from '../assets/empty_bag.svg';
import { CartTimelineContainer, Loading } from "../components";
import { loginUser } from "../features/userSlice";
import { UserCart } from "../types/general";
import { fetchCart } from "../util/fetchCart";
import { getAccountFromLocalStorage, getFromLocalStorage } from "../util/util";
const cartQuery = (username: string, sessionId: string) => {

  return {
    queryKey: ['cart'],
    queryFn: () => fetchCart(username, sessionId)
  }
}
export const loader = (store: Store, queryClient: QueryClient) => async () => {
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
  const sessionId = localStorage.getItem('_apx.sessionid') || '';
  const username = store.getState().userSlice.username;

  const response = await queryClient.fetchQuery(cartQuery(username, sessionId))
  const userCart = response;
  return userCart;
}
const Cart = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'submitting'
  const { cartList } = useLoaderData() as UserCart

  if (cartList.length === 0) {
    return <Wrapper>
      <div>
        <img src={emptyBag} alt="" />
      </div>
    </Wrapper>
  }

  return <Wrapper>
    <div className="timeline">
      <CartTimelineContainer />
    </div>
    <section className="outlet">
      {
        isLoading ? <Loading /> : <Outlet />
      }
    </section>
  </Wrapper>
}
const Wrapper = styled.section`
display: flex;
flex-direction: column;
row-gap: var(---r-gap-2);
width: 100vw;
background-color: var(---ghost);

  .timeline{
      display: flex;
      max-width: var(---maxWidth-1);
      margin: 0 auto;
      width: 100%;
  }

@media screen and (min-width: 768px) {

    .timeline{
      display: flex;
      max-width: var(---maxWidth-1);
      margin: 0 auto;
      width: 100%;
  }
}


@media screen and (min-width: 1092px) {
  
    .timeline{
      display: flex;
      max-width: var(---maxWidth-2);
      margin: 1rem auto;
      width: 100%;
  }
}
`
export default Cart

