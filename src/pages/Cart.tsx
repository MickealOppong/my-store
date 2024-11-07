import { Store } from "@reduxjs/toolkit";
import { QueryClient } from "@tanstack/react-query";
import { Outlet, useNavigation } from "react-router-dom";
import styled from "styled-components";
import { CartTimelineContainer, Loading } from "../components";
import { fetchCart } from "../util/fetchCart";

const cartQuery = () => {

  return {
    queryKey: ['cart'],
    queryFn: () => fetchCart()
  }
}

export const loader = (store: Store, queryClient: QueryClient) => async () => {
  const response = await queryClient.fetchQuery(cartQuery())
  const cartList = response;
  return cartList;
}
const Cart = () => {


  const navigation = useNavigation()
  const isLoading = navigation.state === 'submitting'


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