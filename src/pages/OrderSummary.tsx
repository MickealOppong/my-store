import { Store } from "@reduxjs/toolkit";
import { QueryClient } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { BillingAddress, OrderedProducts, OrderHeader, ShippingAddress, TotalContainer } from "../components/index";
import { Order } from "../types/general";
import { fetchOrder } from "../util/fetchOrder";
import { getFromLocalStorage } from "../util/util";

const orderQuery = (orderId: number) => {
  return {
    queryFn: () => fetchOrder(orderId),
    queryKey: ['order', orderId]
  }
}
export const loader = (store: Store, queryClient: QueryClient) => async () => {
  const id = getFromLocalStorage('orderId') as string
  const orderId = parseInt(id)

  const response = await queryClient.fetchQuery(orderQuery(orderId))
  const orderData = response;

  return orderData;
}

const OrderSummary = () => {

  const orderData = useLoaderData() as Order
  console.log(orderData);
  const { orderLineItems, orderInvoiceAddress, orderDeliveryAddress } = orderData;

  return <Wrapper>
    <OrderHeader />
    <OrderedProducts products={orderLineItems} />
    <div className="address">
      <ShippingAddress deliveryAddress={orderDeliveryAddress} />
      {
        orderInvoiceAddress ? <BillingAddress billingAddress={orderInvoiceAddress} /> : <></>
      }
    </div>
    <div>
      <TotalContainer />
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction:column;

  .address{
    display: flex;
  }
`
export default OrderSummary