import styled from "styled-components";
import { CheckoutAddress, CheckoutTotal, DeliveryOptionContainer, PaymentOptions } from "../components";
import { userCart } from "../components/cart/CartContainer";
import { payOption } from "../components/Checkout/PaymentOptions";
import { deliveryOptions } from "../util/data";
import { useAppSelector } from "../util/hooks";

const Checkout = () => {
  const isNavbarFixed = useAppSelector((state) => state.userMenu.isNavbarFixed)



  let cartTotal: number = 0;

  userCart.forEach((item) => {
    cartTotal += item.price;
  })


  return <Wrapper>
    <div className="main">
      <div className="parent-address">
        <div className="address">
          <CheckoutAddress />
        </div>
      </div>
      <div className="parent-courier">
        <div className="courier">
          <DeliveryOptionContainer data={deliveryOptions} />
        </div>
      </div>
      <div className="parent-payment">
        <div className="payment">
          <PaymentOptions data={payOption} />
        </div>
      </div>
    </div>
    <div className={`parent-orderTotal ${isNavbarFixed ? 'fixed' : ''}`}>
      <div className="order-total">
        <CheckoutTotal total={cartTotal} shipping={10.99} />
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