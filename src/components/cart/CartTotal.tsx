import { Link } from "react-router-dom";
import styled from "styled-components";
import SafetyBadge from "../general/SafetyBadge";

const CartTotal = () => {
  return <Wrapper>
    <div className="cart-summary">
      <div className="cart-summary-title">
        <p>summary</p>
      </div>
      <div className="summary">
        <span>Total orders</span>
        <span className="currency-value">{1}</span>
      </div>
    </div>

    <div className="cart-total">
      <div className="cartTotal">
        <span>Without delivery</span>
        <span className="currency-value final">{1}</span>
      </div>
      <div className="btn-links">
        <Link to={'/cart/checkout'} className="checkout-btn"><span>Delivery and payment</span></Link>
        <Link to={'/'} className="shop-btn"><span>continue shopping</span></Link>
      </div>
    </div>
    <div className="safety-badge">
      <SafetyBadge />
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 2rem;
width: 100vw;
padding:1rem;


.cart-summary-title{
  text-transform:uppercase;
  font-weight:900;
  font-size:1.2rem;
}

.cart-summary{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom:10px;
  border-bottom:var(---textColor-1)  solid 0.5px;
}

.summary,
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
    row-gap: 1.5rem;
   
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
    background-color: var(---secondary);
    color: var(---white);
    text-transform:uppercase;
    font-size:var(---fontSize-1);
    border-radius:3px;
    letter-spacing: var(---spacing-1);
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

  .currency-value{
    font-weight:900;
  }

  .final{
    font-size:1.3rem;
  }

  .safety-badge{
    display: flex;
    justify-content: center;
  }
`
export default CartTotal;