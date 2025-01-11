import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAddToCartMutation } from "../../features/api/cartApi";
import { useDeleteItemMutation } from "../../features/api/favouriteApi";
import { setCartQuantity } from "../../features/cartSlice";
import { updateFavouriteCounter } from "../../features/favouriteSlice";
import { useAppSelector } from "../../hooks/hooks";


const FavouriteItem = ({ productImage, productName, price, productId }: { productImage: string, productName: string, price: number, productId: number }) => {
  const userId = useAppSelector((state) => state.userSlice.id)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const sessionId = sessionStorage.getItem('_apx.sessionid') as string
  const dispatch = useDispatch()


  const [addToCart] = useAddToCartMutation()
  const [removeItem] = useDeleteItemMutation()

  const handleButtonCLick = async () => {
    try {
      const response = await addToCart({ productId, userId, quantity: 1, sessionId })
      dispatch(setCartQuantity(response.data))
    } catch (error) {

    }
  }

  const handleDelete = async () => {
    try {
      const response = await removeItem({ userId, token, productId })
      dispatch(updateFavouriteCounter(response?.data as number))
    } catch (error) {

    }
  }
  return <Wrapper>
    <div className="image-container">
      <img src={productImage} alt="" />
    </div>
    <div className="fav">
      <div className="fav-item">
        <p>{productName}</p>
        <p>{price}</p>
      </div>
      <div className="btn-container">
        <button className='delete-btn' onClick={() => handleDelete()} ><AiOutlineDelete /></button>
        <button className="add-cart" onClick={() => handleButtonCLick()}><span>Add to  cart</span></button>
      </div>
    </div>
  </Wrapper>

}
const Wrapper = styled.div`

  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  column-gap:10px;
  background-color: var(---white);

  .image-container{
    display: flex;
    width: 4rem;
  }
  img{
    width: 4rem;
    height:4rem;
  }

  .fav{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .fav-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    column-gap:10px;
    
  }

  .btn-container{
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 10%;
    row-gap: 10px;
  }

  .add-cart{
display: flex;
align-items: center;
justify-content: center;
background-color: var(---primary);
border-color:transparent;
color: var(---white);
width: 100%;
height: 2.5rem;
font-size: 1rem;
border-radius:5px;
  }

  .delete-btn{
    display: flex;
  justify-content: center;
  background-color:transparent;
  border-color:transparent;
  font-size:1.2rem;
  width: 3rem;
  }

  .delete-btn:hover{
    background-color: var(---ghost);
    border-radius:5px;
    cursor: pointer;
  }


`
export default FavouriteItem