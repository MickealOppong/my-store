import { FormEvent } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDeleteUserCartItem } from '../../hooks/useDeleteCartItem'
import { useFormDataNumber } from '../../hooks/useFormDataNumber'
import { useUpdateCart } from '../../hooks/useUpdateCart'
import FormInputNumberCart from '../general/FormInputNumberCart'


const SingleCart = ({ cartId, id, productImage, productName, price, quantity, productId, include: isInCart }: {
  cartId: number, id: number,
  productImage: string, productName: string, quantity: number, price: number, productId
  : number, include: boolean
}) => {
  const { value, handleClickMinusButton, handleClickPlusButton, handleInputValueChange } = useFormDataNumber(quantity + "")
  const { updateCart } = useUpdateCart()
  const { deleteCartItem } = useDeleteUserCartItem(productId, cartId)

  //const navigate = useNavigate();
  function handleFocusEvent(e: React.FocusEvent<HTMLInputElement, Element>) {
    updateCart(id, productId, parseInt(e.target.value as string))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { quantity } = Object.fromEntries(formData)

    if (quantity) {
      updateCart(id, productId, parseInt(quantity as string))
    }
  }

  const handleDeleteCartItem = () => {
    deleteCartItem()
  }


  return <Wrapper>

    <div className={`single-item  `} style={{ opacity: isInCart ? '1' : '0.5' }}>
      <div className='cart-description-container'>
        <div className='img-container'>
          <img src={productImage} alt="" />
        </div>
        <div className='name-container'>
          <Link to={`/product/${id}`}>{productName}</Link>
        </div>
        <div className='delete-container sm'>
          <button className='delete-btn' onClick={() => handleDeleteCartItem()}><AiOutlineDelete /></button>
        </div>
      </div>
      <div className='cart-total-container medium-screen'>
        <form onSubmit={handleSubmit} method='post'>
          <FormInputNumberCart width="input-control" handleClickMinusButton={handleClickMinusButton} handleClickPlusButton={handleClickPlusButton} handleInputValueChange={handleInputValueChange} handleFocusEvent={handleFocusEvent} inputValue={value} />
        </form>
        <div className='amount-container'>
          <div className='amount'>
            <p>{price * quantity}</p>
          </div>
          <div className='delete-container large-screen'>
            <button className='delete-btn' onClick={() => handleDeleteCartItem()}><AiOutlineDelete /></button>
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
 
   .single-item{
    display: flex;
    flex-direction: column;
    width: 100%;
   }


  .cart-description-container,
  .cart-total-container{
      display: flex;
    align-items: center;
    justify-content: space-between;
  }

 .name-container{
  display: flex;
  align-items: center;
    width: 100%;
    height: 6rem;
  }

  .name-container a{
    color: var(---textColor);
  }
  .name-container a:hover{
    color: var(---primary);
  }

  .cart-total-container{
    justify-content: space-between;
  }


  img{
    width: 4rem;
    height: 4rem;
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
  align-items: center;
}

.amount{
  margin-right:10px;
  font:var(---amountFont);
  font-size:var(---amount);
  color: var(---amountColor);
}

  @media screen and (min-width: 768px) {

  display: flex;
  flex-direction: row;


  img{
    width: 6rem;
    height: 6rem;
  }

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
export default SingleCart