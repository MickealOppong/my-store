import { GoPeople } from "react-icons/go";
import styled from "styled-components";
import FormInputNumber from "../general/FormInputNumber";

const ProductCartInfo = () => {


  return <Wrapper >
    <div className="product-info" >
      <div className="name-container">
        <h2>Duża Walizka XXL Na Kółkach Bagaż Torba RGL</h2>
      </div>
      <div className="product-price">
        <div className="price-info">
          <div className="price-container">
            <span className="price">272</span>
            <span className="price-decimal">20 zl</span>
          </div>
          <div className="discount-container">
            <span>-10%</span>
          </div>
        </div>
        <div className="discount-info">
          <span>Original price before discount:</span>
          <span>300 zl</span>
        </div>

      </div>
      <div className="payment-options">
        <h4>You can take advantage of our pay later options</h4>
        <div className="payment-info">
          <span className="icon"><GoPeople />payforme</span>
          <span className="text">zapłac pożniej</span>
        </div>
      </div>
      <div className="quantity-container">
        <FormInputNumber type="number" name="quantity" width="input-width" />
      </div>
      <div className="btn-container">
        <button className="add-cart-btn">Add to cart</button>
        <button className="buy-now-btn">Buy now</button>
      </div>
    </div>
  </ Wrapper>
}

const Wrapper = styled.section`
   .product-info{
  display: flex;
  flex-direction:column;
  background-color: var(---white);
  padding-bottom:20px;

  }

  @media screen and (min-width: 1092px){

    .name-container{
      display: flex;
      padding-left:20px;
      padding-right:20px;
      padding-top:5px;
      padding-bottom:5px;
      border-bottom:var(---textColor-3) solid 0.5px;
    }

.product-price{
  display: flex;
  flex-direction:column;
  align-items: center;
  row-gap: 1rem;
  border-bottom:var(---textColor-3) solid 0.5px;
 padding-left:20px;
  padding-right:20px;
  padding-top:10px;
  padding-bottom:10px;
}


.price-info{
  display: flex;
  align-items: center;
  column-gap:1rem;
  width: 100%;

}

.discount-info{
   display: flex;
  align-items: center;
  column-gap:10px;
  width: 100%;

}
.price-container{
  display: flex;
  align-items: center;
  column-gap:10px;
}

.price{
  color: #bd1414;
  font-weight:900;
  font-size:var(---fontSize-3);
}

.price-decimal{
  color:#ea5858;
  font-size:var(---fontSize-1);
}

.btn-container{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
   padding-left:20px;
  padding-right:20px;
  padding-top:5px;
  padding-bottom:5px;
 
}

.discount-container{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
  width: 4rem;
  height: 2rem;
  font-weight:900;
}


.payment-options{
  display: flex;
  flex-direction: column;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:10px;
  border-bottom:var(---textColor-3) solid 0.5px;

}

.payment-info{
  display: flex;
  align-items: center;
  column-gap:1rem;
}

.icon{
  display: flex;
  align-items: center;
  column-gap:5px;
  color: var(---textColor-1);
}

.text{
    color: var(---textColor-1);
}
.add-cart-btn,
.buy-now-btn{
  background-color: var(---secondary);
  border-color:transparent;
  color: var(---white);
  height: 3rem;
  font-size:1rem;
  border-radius:5px;
}
.quantity-container{
  height: 3rem;
  padding-left:20px;
  padding-right:20px;
  padding-top:10px;
  padding-bottom:10px;
}
}


.input-width{
  width: 8rem;
}
`

export default ProductCartInfo