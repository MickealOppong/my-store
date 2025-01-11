import { Store } from "@reduxjs/toolkit";
import { QueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { BillingAddress, Loading, OrderedProducts, OrderHeader, ShippingAddress, TotalContainer } from "../components/index";
import { useGetOrderQuery } from "../features/api/orderApi";
import { useAppSelector } from "../hooks/hooks";


export const loader = (store: Store, queryClient: QueryClient) => async () => {
  return null;
}

const OrderSummary = () => {

  const userId = useAppSelector((state) => state.userSlice.id)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const { data: order, isLoading } = useGetOrderQuery({ userId, token, isCompleted: true, url: 'orders/order' })

  console.log(order);


  if (!order) {
    return <Loading />
  }
  if (isLoading) {
    return <Loading />
  }
  return <Wrapper>
    <div className="order-summary-center">
      <OrderHeader orderDate={order.orderDate} deliveryDate={order.deliveryDate} paymentMethod={order.paymentMethod} />
      <div className="products">
        <OrderedProducts products={order?.orderLineItems} />
      </div>
      <div className="order-total">
        <TotalContainer orderTotal={order?.orderTotal} shippingCharge={order?.courierCost} discount={0} />
      </div>
      <div className="address">
        <ShippingAddress deliveryAddress={order?.orderDeliveryAddress} />
        {
          order.orderInvoiceAddress ? <BillingAddress billingAddress={order?.orderInvoiceAddress} /> : <></>
        }
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  background-color: var(---white);


  .order-summary-center{
    display: flex;
    flex-direction: column;
    max-width: var(---maxWidth-1);
    margin: 0 auto;
    width: 100%;
     gap: 2rem;
  }
  .address{
    display: flex;
    column-gap:2rem;
    width: 100%;
  }

  .products{
    display: flex;
    border:var(---ghost) solid 1px;
    padding: 10px;
  }

  @media screen and (min-width:768px) {
    max-width: 80vw;
    margin: 0 auto;
    width: 100%;
     gap: 2rem;
    padding: 2rem;
  }

    @media screen and (min-width:1092px) {

    max-width: 70vw;
    margin: 0 auto;
    width: 100%;
  }


    @media screen and (min-width:1200px) {
   
    max-width: 60vw;
    margin: 0 auto;
    width: 100%;
  
  }
`
export default OrderSummary