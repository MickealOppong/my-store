import { Link } from 'react-router-dom'
import styled from 'styled-components'


const OrderedProduct = ({ productImage, productName, price, quantity, productId }: {
  productImage: string, productName: string, quantity: number, price: number, productId
  : number
}) => {



  return <Wrapper>

    <div className={`single-item  `} >
      <div className='img-container'>
        <img src={productImage} alt="" />
      </div>
      <div className='name-container'>
        <div className='name'>
          <Link to={`/product/${productId}`}>{productName}</Link>
        </div>
        <div className='amount-container'>
          <div>
            <p>{`${quantity} x ${price}`}</p>
          </div>
          <div className='amount'>
            <p>{price * quantity}</p>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
    display: flex;
   align-items: center;
   width: 100%;
   margin-top:1rem;

 
   .single-item{
    display: flex;
    width: 100%;
    column-gap:10px;
   }


  .cart-description-container,
  .cart-total-container{
      display: flex;
    align-items: center;
    justify-content: space-between;
  }

 .name-container{
   display: flex;
   flex-direction: column;
    width: 100%;
    height:100%;
  }

  .name-container a{
    font-size:1.2rem;
    font-weight:400;
    color: var(---textColor);
  }
  .name-container a:hover{
    color: var(---primary);
  }

  .name{
    height: 4rem;
  }
  .cart-total-container{
    justify-content: space-between;
  }


  img{
    width: 6rem;
    height: 6rem;
  }

  .delete-btn{
    font-size:1rem;
    background-color: transparent;
    border-color:transparent;
    color: var(---textColor);
    cursor: pointer;
  }

  .delete-btn:hover{
    background-color: var(---ghost);
  }

.large-screen{
  display: none;
}

.amount-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;
}

.amount{
  margin-right:10px;
  font:var(---amountFont);
  font-size:var(---amount);
  color: var(---amountColor);
}

  @media screen and (min-width: 768px) {

  display: flex;


  }

   @media screen and (min-width: 1092px) {

  display: flex;
  flex-direction: row;

    .single-item{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .cart-description-container{
    width: 50%;
    column-gap:1rem;
  }

  .cart-total-container{
    width: 50%;
  }
  .medium-screen{
    display:flex;
  }


  .large-screen{
    display: flex;
  }
 .sm{
  display: none;
 }
}
`
export default OrderedProduct