import styled from "styled-components";

const TotalContainer = ({ orderTotal, shippingCharge, discount
}: { orderTotal: number, shippingCharge: number, discount: number }) => {
  const taxes = (orderTotal - discount) * 0.23;
  return <Wrapper>
    <div className="subtotal-container">
      <label>Subtotal</label>
      <p>{orderTotal}</p>
    </div>
    <div className="shipping-container">
      <label>Shipping charge</label>
      <p>{shippingCharge}</p>
    </div>
    <div className="taxes-container">
      <label>Taxes</label>
      <p>{taxes.toFixed(2)}</p>
    </div>
    <div className="discount-container">
      <label>Discount</label>
      <p>{discount}</p>
    </div>
    <div className="total-container">
      <p className="total">Total</p>
      <h2>{(orderTotal + shippingCharge + discount + taxes).toFixed(2)}</h2>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: var(---ghost) solid 1px;
  padding: 10px;



.subtotal-container,
.taxes-container,
.total-container,
.discount-container,
.shipping-container{
display: flex;
justify-content: space-between;
height: 3rem;
}
label{
  color: var(---textColor);
}

p{
  color: black;
  font-weight:700;
}

.total-container{
    border-top: var(---ghost) solid 1px;
}

.total{
  color: black;
  font-weight:700;
}
`
export default TotalContainer