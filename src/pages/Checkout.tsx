import styled from "styled-components";
import { CheckoutAddress, CheckoutTotal, DeliveryOptionContainer, Loading, PaymentOptions } from "../components";

import { Store } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";
import CheckoutProducts from "../components/Checkout/CheckoutProducts";
import { useGetOrderQuery } from "../features/api/orderApi";
import { useAppSelector } from "../hooks/hooks";


export const loader = (store: Store) => async () => {
  const username = store.getState().userSlice.username;

  if (!username) {
    return redirect('/login')
  }


  return null;
}
const Checkout = () => {
  const isNavbarFixed = useAppSelector((state) => state.userMenu.isNavbarFixed)
  //load user order
  //const orderId = useAppSelector((state) => state.orderSlice.orderId)
  const userId = useAppSelector((state) => state.userSlice.id)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const { data: userOrder, isLoading } = useGetOrderQuery({ url: '/orders/order', userId, token, isCompleted: false })





  if (!userOrder) {
    return null;
  }
  if (isLoading) {
    return <Loading />
  }

  return <Wrapper>
    <div className="main">
      <div className="parent-address">
        <div className="address">
          <CheckoutAddress />
        </div>
      </div>
      <div className="parent-courier">
        <div className="products">
          <CheckoutProducts products={userOrder.orderLineItems ?? []} />
        </div>
        <div className="courier">
          <DeliveryOptionContainer courier={userOrder.courier} />
        </div>
      </div>
      <div className="parent-payment">
        <div className="payment">
          <PaymentOptions orderPayment={userOrder.paymentMethod} />
        </div>
      </div>
    </div>
    <div className={`parent-orderTotal ${isNavbarFixed ? 'fixed' : ''}`}>
      <div className="order-total">
        <CheckoutTotal total={userOrder.orderTotal} shippingCost={userOrder.courierCost} paymentMethod={userOrder.paymentMethod} />
      </div>
    </div>
  </Wrapper>


}

const Wrapper = styled.div`
position: relative;
display: flex;
flex-direction:column;
row-gap: 1rem;



.main{
  display: flex;
  flex-direction:column;
  row-gap: 1rem;
  margin-bottom:4rem;
}

.parent-address,
.parent-payment,
.parent-orderTotal,
.parent-courier{
 display: flex;
 flex-direction:column;
 row-gap: 1rem;
background-color: var(---white);
padding: 0  1rem;
}

.parent-orderTotal{
padding-bottom:1rem;
margin-bottom:1rem;
}
  .fixed{
    top: 20%;
  }


@media screen and (min-width: 768px){

    display: flex;
    flex-direction: row;
    max-width:var(---maxWidth-1);
    margin:0 auto;
    width: 100%;


    .main{
      width: 60vw;
    }

    .parent-orderTotal{
      position: fixed;
      right: 1%;
      width: 30vw;
      height: 23rem;

    }

.parent-orderTotal{
padding-bottom:0;
margin-bottom:0;
}
}


@media screen and (min-width: 1092px){

    display: flex;
    flex-direction: row;
    max-width:var(---maxWidth-2);
    margin:0 auto;
    width: 100%;

  

    .main{
      width: 58vw;
    }
   
    .parent-orderTotal{
        position: fixed;
        right: 2%;
        width: 30vw;
    }
}

.parent-orderTotal{
padding-bottom:0;
margin-bottom:0;
}
`
export default Checkout