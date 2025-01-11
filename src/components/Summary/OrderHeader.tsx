import styled from "styled-components"
import { useAppSelector } from "../../hooks/hooks"

const OrderHeader = ({ orderDate, deliveryDate, paymentMethod }: { orderDate: string, deliveryDate: string, paymentMethod: string }) => {

  const firstName = useAppSelector((state) => state.userSlice.firstName)
  const lastName = useAppSelector((state) => state.userSlice.lastName)
  const orderId = useAppSelector((state) => state.orderSlice.orderId)
  return <Wrapper>
    <div className="order-title">
      <h2>Your Order Details</h2>
    </div>
    <div className="msg">
      <p>Hello, {`${firstName} ${lastName}`}</p>
      <p>Thank  you. Your order has been confirmed</p>
    </div>
    <div className="header-center">
      <div className="order-date">
        <label>Order date</label>
        <p> {new Date(orderDate).toDateString()}</p>
      </div>
      <div className="delivery-date">
        <label>Delivery date</label>
        <p> {new Date(deliveryDate).toDateString()}</p>
      </div>
      <div className="order-id">
        <label>Order number</label>
        <p>{`${orderId}`}</p>
      </div>
      <div className="currency">
        <label>Currency:</label>
        <p>{`USD`}</p>
      </div>
      <div className="payment-type">
        <label>Payment method:</label>
        <p>{paymentMethod}</p>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;


  .header-center{
    display: flex;
     border: var(---ghost)solid 1px;
    
  }
.msg~p{
  text-transform:capitalize;
}
  .order-date,
  .delivery-date,
  .order-id,
  .currency,
  .payment-type{
   display: flex;
    flex-direction:column;
    row-gap: 10px;
    width: 100%;
    padding: 5px;
    border-right:var(---ghost) solid 1px;
  }

  label{
    color: var(---textColor);
    font-size:10px;
    text-transform:capitalize;
  }
  .order-date p,
  .delivery-date p,
  .order-id p,
.currency  p,
.payment-type p{
margin:0;
}
`
export default OrderHeader