import { FormEvent, useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { invalidateFetch } from '../../features/cartSlice'
import { useFormDataNumber } from '../../hooks/useFormDataNumber'
import { useUpdateCart } from '../../hooks/useUpdateCart'
import { useUpdateCartStatus } from '../../hooks/useUpdateCartStatus'
import FormInputNumberCart from '../general/FormInputNumberCart'


const SingleCart = ({ id, productImage, productName, price, quantity, productId, include: selected }: {
  id: number,
  productImage: string, productName: string, quantity: number, price: number, productId
  : number, include: boolean
}) => {
  const { value, handleClickMinusButton, handleClickPlusButton, handleInputValueChange, handleFocusEvent } = useFormDataNumber(quantity)

  const { includeInCart, handleClick } = useUpdateCartStatus(id, productId, selected)

  const dispatch = useDispatch()
  const { updateCart } = useUpdateCart()

  useEffect(() => {
    if (value) {
      updateCart(id, productId, parseInt(value))
    }
  }, [value])



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { quantity } = Object.fromEntries(formData)

    if (quantity) {
      updateCart(id, productId, parseInt(quantity as string))
      dispatch(invalidateFetch())
    }
  }


  return <Wrapper>
    <div className={`checkbox-container `}>
      <div className={`checkbox-btn ${includeInCart ? 'checked' : ''}`} onClick={handleClick}><FaCheck /></div>
    </div>
    <div className={`single-item  `} style={{ opacity: includeInCart ? '1' : '0.5' }}>
      <div className='cart-description-container'>
        <div>
          <img src={productImage} alt="" />
        </div>
        <div className='name-container'>
          <Link to={`/product/${id}`}>{productName}</Link>
        </div>
        <div className='delete-container sm'>
          <button className='delete-btn'><AiOutlineDelete /></button>
        </div>
      </div>
      <div className='cart-total-container medium-screen'>
        <form onSubmit={handleSubmit} method='post'>
          <FormInputNumberCart width="input-control" handleClickMinusButton={handleClickMinusButton} handleClickPlusButton={handleClickPlusButton} handleInputValueChange={handleInputValueChange} handleFocusEvent={handleFocusEvent} inputValue={value} />
        </form>
        <div>
          <p>{price * quantity}</p>
        </div>
        <div className='delete-container large-screen'>
          <button className='delete-btn'><AiOutlineDelete /></button>
        </div>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
    display: flex;
   align-items: center;
   column-gap:10px;


   .single-item{
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events:
   }


  .cart-description-container,
  .cart-total-container{
    display: flex;
    width: 100%;
  }

 .name-container{
    width: 100%;
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
    font: var(---fontSize-2);
    background-color: transparent;
    border-color:transparent;
    color: var(---textColor);
  }

.large-screen{
  display: none;
}

.checkbox-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(---white);
  border-color:transparent;
 width:15px;
  height: 15px;
  border:var(---textColor)  solid 2px;
  border-radius:2px;
  cursor: pointer;
}

.checkbox-btn svg{
 color: var(---white);
}

.checked{
  font-weight:900;
  border:var(---secondary)  solid 2px;
}

.checked svg{
  font-weight:900;
  color: var(---secondary);
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
    column-gap:20px;
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