import styled from "styled-components";
import { CheckoutAddress, CheckoutTotal, DeliveryOptionContainer, PaymentOptions } from "../components";

import { Store } from "@reduxjs/toolkit";
import { QueryClient } from "@tanstack/react-query";
import { redirect, useLoaderData } from "react-router-dom";
import CheckoutProducts from "../components/Checkout/CheckoutProducts";
import { useAppSelector } from "../hooks/hooks";
import { AddressDto, CourierDto, InvoiceAddressDto, Order, PaymentMethod, ResponseData } from "../types/general";
import { fetchAddress } from "../util/fetchAddress";
import { fetchCourier } from "../util/fetchCourier";
import { fetchOrder } from "../util/fetchOrder";
import { fetchPaymentMethods } from "../util/fetchPaymentMethods";

const deliveryAddressQuery = (url: string, id: number) => {
  return {
    queryFn: () => fetchAddress(url, id),
    queryKey: ['deliveryAddressList']
  }
}
const invoiceAddressQuery = (url: string, id: number) => {
  return {
    queryFn: () => fetchAddress(url, id),
    queryKey: ['invoiceAddressList']
  }
}
const courierQuery = () => {
  return {
    queryFn: () => fetchCourier(),
    queryKey: ['courier']
  }
}

const paymentMethodQuery = () => {
  return {
    queryFn: () => fetchPaymentMethods(),
    queryKey: ['payment-methods']
  }
}

const orderQuery = (orderId: number) => {
  return {
    queryFn: () => fetchOrder(orderId),
    queryKey: ['order', orderId]
  }
}

export const loader = (store: Store, queryClient: QueryClient) => async () => {
  const username = store.getState().userSlice.username;
  const id = store.getState().userSlice.id
  const orderId = store.getState().orderSlice.id;
  if (!username) {
    return redirect('/login')
  }

  const responseA = await queryClient.fetchQuery(deliveryAddressQuery('/address/delivery', id))
  const responseB = await queryClient.fetchQuery(invoiceAddressQuery('/address/invoice-address', id))
  const responseC = await queryClient.fetchQuery(courierQuery())
  const responseD = await queryClient.fetchQuery(paymentMethodQuery())
  const responseE = await queryClient.fetchQuery(orderQuery(orderId))

  const deliveryAddressList: AddressDto[] = responseA;
  const invoiceAddressList: InvoiceAddressDto[] = responseB;
  const courierList: CourierDto[] = responseC;
  const paymentMethods: PaymentMethod[] = responseD;
  const userOrder: Order[] = responseE;

  return {
    deliveryAddressList,
    invoiceAddressList,
    courierList,
    paymentMethods,
    userOrder
  }
}
const Checkout = () => {
  const isNavbarFixed = useAppSelector((state) => state.userMenu.isNavbarFixed)
  const { userOrder } = useLoaderData() as ResponseData


  return <Wrapper>
    <div className="main">
      <div className="parent-address">
        <div className="address">
          <CheckoutAddress />
        </div>
      </div>
      <div className="parent-courier">
        <div className="products">
          <CheckoutProducts products={userOrder.orderLineItems} />
        </div>
        <div className="courier">
          <DeliveryOptionContainer />
        </div>
      </div>
      <div className="parent-payment">
        <div className="payment">
          <PaymentOptions />
        </div>
      </div>
    </div>
    <div className={`parent-orderTotal ${isNavbarFixed ? 'fixed' : ''}`}>
      <div className="order-total">
        <CheckoutTotal total={userOrder.orderTotal} shippingCost={userOrder.courierCost} paymentMethod={userOrder.paymentMethod} orderId={userOrder.id} />
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