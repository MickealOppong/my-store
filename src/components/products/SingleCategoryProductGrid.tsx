import { AiFillHeart, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAddToCartMutation } from "../../features/api/cartApi";
import { useAppSelector } from "../../hooks/hooks";
import { SelectedProduct } from "../../types/general";


const SingleCategoryProductGrid = ({ id, productImages, name, price, shippingCost }: SelectedProduct) => {
  const navigate = useNavigate();
  const [addToCart] = useAddToCartMutation()
  // const { addProductToFavourite } = useAddToFavourite(id)
  const username = useAppSelector((state) => state.userSlice.username)


  const handleButtonClick = () => {
    addToCart({ productId: id })
  }

  const handleFavBtnClick = () => {
    if (!username) {
      navigate('/login')
      return
    }
    //addProductToFavourite()
  }


  return <Wrapper >
    <div className="product-grid-container">
      <Link to={`/product/${id}`} className="product-grid">
        <div className="img-container-grid">
          <img src={productImages[0]} alt="" />
        </div>
        <div className="details-container-grid">
          <div className="desc-container-grid">
            <span className="description-grid">{name.substring(0, 40)}</span>
          </div>
          <span className="price">{price}</span>
          <span className="shipping">{shippingCost}</span>
        </div>
      </Link>
      <button className="add-to-fav" onClick={() => handleFavBtnClick()}>{
        true ? <AiFillHeart className="svg" /> : <AiOutlineHeart className="svg" />}</button>
      <button className="add-to-cart" onClick={() => handleButtonClick()}><AiOutlineShopping className="svg" /></button>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
 width: 100%;

  .product-grid-container{
   position: relative;
   display: flex;
    width: 100%;
    height: 100%;
  }

.product-grid{
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
row-gap: 2px;
background-color: var(---white);
padding: 1rem;
transition:all .1s ease-in-out
}

.img-container-grid{
  display: flex;
  justify-content: center;
}

img{
  width: 50vw;
  height: 30vh;
}

.details-container-grid{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top:10px;
}


 .svg{
 font-size:20px;
}

.add-to-fav svg{
 color: var(---primary);
}

.add-to-fav:hover{
  background-color:var(---accent);
  transform:scale(1.1);
  transition: all .2s ease-in-out;
  color: var(---white);
}


.add-to-fav{
  position: absolute;
  top: 5%;
  right: 5%;
   display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-color:transparent;
  border: var(---primary) groove 1px;
  border-radius:50%;
  transition: all .2s ease-in-out;
}

.add-to-cart{
    position: absolute;
  bottom: 5%;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---primary);
  color: var(---white);
  border-color:transparent;
  border-radius:50%;
  cursor: pointer;

}

.add-to-cart svg{
  color: var(---white);
}

.add-to-cart:hover{
  transform:scale(1.1);
  transition: all .2s ease-in-out;
}

.desc-container-grid{
  display: flex;
  width: 100%;
   height: 3rem;
}
.description{
  color: var(---textColor-3);
}

.price{
  color: red;
  font-size:1.5rem; 
}

.shipping{
  color: green;
}


  @media screen and (min-width: 768px){
    
img{
  width: 15vw;

}


.fav-btn:hover{
  background-color:var(---accent);
  transform:scale(1.1);
  transition: all .2s ease-in-out;
  color: var(---white);
}

  }

    @media screen and (min-width: 768px){

      .add-to-cart,
      .add-to-fav{
        display: none;
      }

      .product-grid-container:hover .add-to-cart{
        display: flex;
      }
        .product-grid-container:hover .add-to-fav{
        display: flex;
      }

        .product-grid:hover{
         box-shadow:var(---shadow-4);
         background-color: var(---white);
         transition:all .1s ease-in-out
      }
    }
`
export default SingleCategoryProductGrid;