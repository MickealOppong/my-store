import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUpdateOrderStatusMutation } from "../../features/api/orderApi";
import { useAppSelector } from "../../hooks/hooks";
import SafetyBadge from "../general/SafetyBadge";

const CheckoutTotal = ({ total, shippingCost, paymentMethod }: { total: number, shippingCost: number, paymentMethod: string }) => {


  const userId = useAppSelector((state) => state.userSlice.id)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const [updateOrderStatus] = useUpdateOrderStatusMutation()
  const [btnText, setBtnText] = useState<string>('Buy  and Pay')
  const navigate = useNavigate()
  console.log(userId);



  const handleClick = async () => {
    if (btnText.toLowerCase() === 'complete') {
      try {
        const response = await updateOrderStatus({ userId, token, isCompleted: true, url: '/orders/change-status' })
        console.log(response);
        navigate('/cart/summary')

      } catch (error) {

      }

    }
  }

  const handlePaymentMethodChange = () => {
    if (paymentMethod.toLowerCase() === 'cash') {
      setBtnText(() => 'Complete')
    } else {
      setBtnText(() => 'Buy and Pay')
    }
  }

  useEffect(() => {
    handlePaymentMethodChange()
  }, [paymentMethod])


  return <Wrapper>
    <div className="cart-summary">
      <div className="cart-summary-title">
        <p>summary</p>
      </div>
      <div className="total-container">
        <span>Total order</span>
        <span className="currency-value" >{total.toFixed(2)}</span>
      </div>
      <div className="delivery-container">
        <span>Delivery</span>
        <span className="currency-value" >{shippingCost}</span>
      </div>
    </div>

    <div className="cart-total">
      <div className="cartTotal">
        <span>To pay</span>
        <span className="currency-value final" >{(total + shippingCost).toFixed(2)}</span>
      </div>
      <div className="btn-links">
        <button className="checkout-btn" onClick={() => handleClick()}><span>{btnText}</span></button>
      </div>
      <div className="safety-badge">
        <SafetyBadge />
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 2.5rem;
padding-bottom:1rem;



.cart-summary-title{
  text-transform:uppercase;
  font-weight:900;
  font-size:1.2rem;
  border-bottom: var(---primary) solid 2px;
}


.cart-summary{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom:10px;
  border-bottom:var(---textColor-1)  solid 0.5px;
}

.total-container,
.delivery-container{
  display: flex;
 align-items: center;
 justify-content: space-between;
  column-gap:10px;
  }

  .cart-total{
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  .cartTotal{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .btn-links{
    display: flex;
    flex-direction: column;
      width: 100%;
  }

  .checkout-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    background-color: var(---light);
    border-color:transparent;
    color: var(---white);
    text-transform:uppercase;
    font-size:var(---fontSize-1);
    border-radius:3px;
    letter-spacing: var(---spacing-1);
     transition: all .2s ease-in-out;
  }

  .checkout-btn:hover{
    background-color: var(---primary);
    transition: all .2s ease-in-out;
  }


  .shop-btn{
     display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
     color:var(---primary);
     font-weight:900;
     text-transform:uppercase;
      font-size:var(---fontSize-1);
      letter-spacing: var(---spacing-1);
  }

  .safety-badge{
    display: flex;
    justify-content: center;

  }

    .currency-value{
    font-weight:900;
  }

  .final{
    font-size:1.3rem;
  }


@media screen and (min-width: 768px){
  
}
`
export default CheckoutTotal;