import { nanoid } from "nanoid"
import { useState } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import styled from "styled-components"
import bag from '../../assets/bag.webp'
import kanopy from '../../assets/kanopy.webp'
import table from '../../assets/table.webp'
import CartTotal from "./CartTotal"
import SingleCart from "./SingleCart"

type Cart = {
  id: string,
  img: string,
  name: string,
  quantity: number,
  price: number,
  isSelected: boolean
}
export const userCart: Cart[] = [
  {
    id: nanoid(),
    img: bag,
    name: '  Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 10.99,
    quantity: 2,
    isSelected: true
  },
  {
    id: nanoid(),
    img: kanopy,
    name: 'Architecto in, unde voluptatum veniam ea nihil dicta sed, qui, ',
    price: 90.99,
    quantity: 1,
    isSelected: true
  },
  {
    id: nanoid(),
    img: table,
    name: ' Suscipit adipisci necessitatibus!',
    price: 100.99,
    quantity: 1,
    isSelected: true
  },
]

const CartContainer = () => {
  const [selected, setSelected] = useState<boolean>(true);

  const handleChange = () => {
    setSelected(() => !selected);
  }

  let cartTotal: number = 0;

  userCart.forEach((item) => {
    cartTotal += item.price;
  })

  const handleDeleteAll = () => {

  }

  return <Wrapper>
    <div className="cart-items">
      <div className="deleteAll-container">
        <div className="checkbox">
          <input type="checkbox" name="deleteAll" checked={selected} onChange={() => handleChange()} />
          <span>Select all</span>
        </div>
        <button className="deleteAll-btn" onClick={() => handleDeleteAll()}><span>Delete all</span><AiOutlineDelete /></button>
      </div>
      <div className="carts">
        {
          userCart.map((cartItem) => {
            return <SingleCart {...cartItem} key={cartItem.id} />
          })
        }
      </div>
    </div>
    <div className="total">
      <CartTotal total={parseFloat(cartTotal.toFixed(2))} shipping={10.99} />
    </div>

  </Wrapper>
}

const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom:2rem;


    .cart-items{
    display: flex;
    flex-direction:column;
    row-gap: 1rem;
    width: 100vw;
  }

  .deleteAll-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(---white);
  }

  .deleteAll-btn{
    display: flex;
    align-items: center;
    column-gap:10px;
    background-color: transparent;
    border-color:transparent;
    margin-right:10px;
  }
  .deleteAll-btn svg{
    color: var(---textColor-1);
    font-size:1rem;
  }

  .checkbox{
    display: flex;
    align-items: center;
    column-gap:10px;
    font-size:0.85rem;
  }

  .carts{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-bottom:1rem;
  }

  .total{
    display: flex;
    background-color: var(---white);
    height: 23rem;
  }

@media screen  and (min-width: 768px){
   display: flex;
  flex-direction: row;
  column-gap:1rem;

    .cart-items{
    width: 70vw;
  }


  .total{
    width: 30vw;
      height: 25rem;
  }
}

@media screen  and (min-width: 1092px){
 display: flex;
  flex-direction: row;
  column-gap:2rem;

    .cart-items{
    width: 70vw;
  }


  .total{
    width: 30vw;
       height: 23rem;
  }
}
`
export default CartContainer