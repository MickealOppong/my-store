import { AiOutlineDelete } from 'react-icons/ai'
import styled from 'styled-components'

import FormInputNumber from "../general/FormInputNumber"

const SingleCart = ({ img, name, quantity, price, isSelected }: {
  id: string, img: string, name: string, quantity: number, price: number, isSelected: boolean
}) => {


  return <Wrapper>

    <div className='checkbox-container'>
      <input type="checkbox" name="delete" checked={isSelected} onChange={() => console.log('selected')
      } />
    </div>
    <div className='single-item'>
      <div className='cart-description-container'>
        <div>
          <img src={img} alt="" />
        </div>
        <div className='description-container'>
          <p>{name}</p>
        </div>
        <div className='delete-container'>
          <button className='delete-btn'><AiOutlineDelete /></button>
        </div>
      </div>
      <div className='cart-total-container medium-screen'>
        <div>
          <FormInputNumber name="quantity" width="input-control" defValue={quantity} />
        </div>
        <div>
          <p>{price}</p>
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

  padding-left:10px;
  padding-right:20px;
  padding-bottom:10px;

  background-color: var(---white);

   .single-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

   }

  .cart-description-container,
  .cart-total-container{
    display: flex;
    align-items: center;
    width: 100%;
  }

 .description-container{
    width: 100%;
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
    color: var(---textColor-3);
  }

.large-screen{
  display: none;
}
  @media screen and (min-width: 768px) {

  display: flex;
  flex-direction: row;
  align-items: center;

  img{
    width: 6rem;
    height: 6rem;
  }
  }

   @media screen and (min-width: 1092px) {

  display: flex;
  flex-direction: row;
  align-items: center;

    .single-item{
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap:20px;
  }

  .medium-screen{
    display: none;
  }

  .large-screen{
    display: flex;
  }
 
}
`
export default SingleCart