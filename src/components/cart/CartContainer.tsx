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
    <section className="carts">
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
              return <div key={cartItem.id} className="cart">
                <SingleCart {...cartItem} />
              </div>
            })
          }
        </div>
      </div>
    </section>
    <section className="total-container">
      <div className="total">
        <CartTotal total={parseFloat(cartTotal.toFixed(2))} shipping={10.99} />
      </div>
    </section>

  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  row-gap: var(---r-gap-2);
  margin-top:2rem;

  .carts{ 
     display: flex;
    flex-direction:column;
    background-color: var(---white);

  }

  .cart{
     display: flex;
    flex-direction:column;
    width: 100%;
    border-top:var(---ghost) groove 1px;
    padding-top:2px;
    padding-bottom:2px;
  }

  .cart:last-child{
    border-bottom:var(---ghost) groove 1px;
    padding-bottom:15px;
  }

    .cart-items{
    display: flex;
    flex-direction:column;
    row-gap: 1rem;
    padding: 15px;
    background-color: var(---white);
  }

 
  .deleteAll-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .deleteAll-btn{
    display: flex;
    align-items: center;
    column-gap:10px;
    background-color: transparent;
    border-color:transparent;
  }
  .deleteAll-btn svg{
    color: var(---textColor);
    font-size:1rem;
  }

  .checkbox{
    display: flex;
    align-items: center;
    column-gap:10px;
    font-size:0.85rem;
  }

  input[type="checkbox"]{
    accent-color: var(---primary);
  }

  .carts{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-bottom:1rem;
  }

.total-container{
   background-color: var(---white);
     margin-bottom:2rem ;
}
  .total{
    display: flex;
    max-width: var(---maxWidth-1);
    margin: 0 auto;
  }

@media screen  and (min-width: 768px){
    display: flex;
    flex-direction: row;
    max-width: var(---maxWidth-1);
    margin: 0 auto;
    column-gap:var(---c-gap-1);

    .cart-items{
   width: 60vw;
  }
.total-container{
  width: 30vw;
  height: 25rem;
  background-color: var(---white);
}
 
}

@media screen  and (min-width: 1092px){
 display: flex;
  flex-direction: row;
  column-gap:2rem;

    .cart-items{
    width: 60vw;
  }

.total-container{
  width: 30vw;
  height: 23rem;
  background-color: var(---white);
}

}
`
export default CartContainer