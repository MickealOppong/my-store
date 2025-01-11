import { useState } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { useDeleteCartMutation, useGetUserCartQuery, useUpdateCartStatusMutation } from "../../features/api/cartApi"
import { setCartQuantity } from "../../features/cartSlice"
import { useAppSelector } from "../../hooks/hooks"
import { CartDto } from "../../types/general"
import Loading from "../general/Loading"
import CartTotal from "./CartTotal"
import SingleCart from "./SingleCart"
import { SingleCartCheckbox } from "./SingleCartCheckbox"


const CartContainer = () => {
  const sessionId = sessionStorage.getItem('_apx.sessionid') as string
  const userId = useAppSelector((state) => state.userSlice.id)
  const dispatch = useDispatch()
  const { data, isLoading } = useGetUserCartQuery({ userId, sessionId })
  const [updateAll] = useUpdateCartStatusMutation()
  const [changeCartStatus, setChangeCartStatus] = useState<boolean>(data?.includeAllItems as boolean)
  const [deleteCart] = useDeleteCartMutation()




  const isAllFalse = data?.cartList.reduce((acc: CartDto[], cur) => {
    if (!cur.include) {
      acc.push(cur)
    }
    return acc;
  }, [])


  const isActive = isAllFalse?.length === data?.cartList.length ? false : true;


  const handleDeleteAll = async () => {
    const cartId = data?.id as number
    try {
      await deleteCart({ cartId })
      dispatch(setCartQuantity(0))
    } catch (error) {
      console.log(error);

    }
  }


  const handleChangeAllStatusRequest = async () => {
    handleAllCartStatusChange()
    try {
      const cartId = data?.id as number
      await updateAll({ cartId, includeAllItems: changeCartStatus })
    } catch (error) {
      console.log(error);
    }
  }

  const handleAllCartStatusChange = () => {
    setChangeCartStatus(() => !changeCartStatus)
  }



  //compute cart total using
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


  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return <h2>Your cart is empty</h2>
  }
  return <Wrapper>
    <section className="carts">
      <div className="cart-items">
        <div className="deleteAll-container">
          <div className="checkbox">
            <div className={`checkbox-btn ${data?.includeAllItems ? 'checked' : ''}`} onClick={() => handleChangeAllStatusRequest()}><FaCheck /></div>
            <span>Select all</span>
          </div>
          <button className="deleteAll-btn" onClick={() => handleDeleteAll()}><span>Delete all</span><AiOutlineDelete /></button>
        </div>
        <div className="cart">
          {
            data?.cartList.map((item) => {
              return <div key={item.id} className="single-item">
                <div className="checkbox-container">
                  <SingleCartCheckbox  {...item} include={item.include} />
                </div>
                <div className="item-container">
                  <SingleCart {...item} productImage={item.productImages[0]} cartId={data?.id} />
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
    <section className="total-container">
      <div className="total">
        <CartTotal total={getTotal(data ? data.cartList : [])} isAllSelected={isActive} cartId={data ? data.id : 0} />
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
  }

  .cart{
     display: flex;
    flex-direction:column;
    row-gap: 2rem;
    padding: 1rem;
    background-color: var(---white);
  }


    .cart-items{
    display: flex;
    flex-direction:column;
    row-gap: 2rem;

  }


  .single-item{
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom:var(---ghost) solid 1px;
  }
 
  .checkbox-container{
    display: flex;
    width:30px;
   
  }

  .item-container{
      display: flex;
    width: 100%; 
  }
  .deleteAll-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(---white);
    padding: 1rem;
  }

  .deleteAll-btn{
    display: flex;
    align-items: center;
    column-gap:10px;
    background-color: transparent;
    border-color:transparent;
    cursor: pointer;
  }

    .deleteAll-btn:hover{
    background-color: var(---ghost);
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

    .carts{
      width: 100%;
    }
    .cart-items{
   width: 60vw;
  }
.deleteAll-container{
  width: 100%;
}
  .cart{
    width: 100%;

  }

  .single-item{
    width: 100%;
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


