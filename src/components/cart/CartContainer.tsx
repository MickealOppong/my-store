import { AiOutlineDelete } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"
import { useLoaderData } from "react-router-dom"
import styled from "styled-components"
import { useUpdateAllStatus } from "../../hooks/useUpdateAllStatus"
import { CartDto } from "../../types/general"
import CartTotal from "./CartTotal"
import SingleCart from "./SingleCart"



const CartContainer = () => {
  const cartList = useLoaderData() as CartDto[]

  const { includeAll, handleAllClick } = useUpdateAllStatus()

  const handleDeleteAll = () => {

  }


  function getTotal(data: CartDto[]): number {
    let total = 0;
    data.map((item) => {
      if (item.include) {
        let subTotal = item.quantity * item.price;
        total = subTotal + total;
      }
    })
    return total;
  }



  return <Wrapper>
    <section className="carts">
      <div className="cart-items">
        <div className="deleteAll-container">
          <div className="checkbox">
            <div className={`checkbox-btn ${includeAll ? 'checked' : ''}`} onClick={handleAllClick}><FaCheck /></div>
            <span>Select all</span>
          </div>
          <button className="deleteAll-btn" onClick={() => handleDeleteAll()}><span>Delete all</span><AiOutlineDelete /></button>
        </div>
        <div className="carts">
          {
            cartList.map((item) => {
              return <SingleCart {...item} productImage={item.productImages[0]} key={item.id} />
            })
          }
        </div>
      </div>
    </section>
    <section className="total-container">
      <div className="total">
        <CartTotal total={getTotal(cartList)} />
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


.checkbox-btn{
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: var(---secondary);
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


