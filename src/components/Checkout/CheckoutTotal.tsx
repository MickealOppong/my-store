import { Link } from "react-router-dom";
import styled from "styled-components";
import { Cart } from "../../types/general";
import SafetyBadge from "../general/SafetyBadge";

const CheckoutTotal = ({ total, shipping }: Cart) => {
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
        <span className="currency-value" >{shipping}</span>
      </div>
    </div>

    <div className="cart-total">
      <div className="cartTotal">
        <span>To pay</span>
        <span className="currency-value final" >{(total + shipping).toFixed(2)}</span>
      </div>
      <div className="btn-links">
        <Link to={'/cart/checkout'} className="checkout-btn"><span>Buy and pay</span></Link>
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