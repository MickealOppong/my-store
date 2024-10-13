import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../types/general";

const SingleCategoryProductGrid = ({ img, description, price, shipping }: Product) => {
  return <Wrapper>
    <Link to={'/product'} className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="details-container">
        <div className="desc-container">
          <span className="description">{description.substring(0, 40)}</span>
        </div>
        <span className="price">{price}</span>
        <span className="shipping">{shipping}</span>
      </div>
    </Link>
    <button className="fav-btn"><AiOutlineHeart /></button>
    <button className="cart-btn"><AiOutlineShopping /></button>

  </Wrapper>
}

const Wrapper = styled.section`
  position: relative;
width: 100%;

.product{

display: flex;
flex-direction: column;
row-gap: 2px;
background-color: var(---white);
padding: 1rem;
transition:all .1s ease-in-out
}

.img-container{
  display: flex;
  justify-content: center;
}

img{
  width: 50vw;
  height: 30vh;
}

.details-container{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top:10px;
}


.fav-btn,
.cart-btn{
    font-size:1.6rem;
}

.fav-btn svg{
 color: var(---primary);
}

.fav-btn:hover{
  background-color:var(---accent);
  transform:scale(1.1);
  transition: all .2s ease-in-out;
  color: var(---white);
}


.fav-btn{
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

.cart-btn{
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

.cart-btn svg{
  color: var(---white);
}

.cart-btn:hover{
  transform:scale(1.1);
  transition: all .2s ease-in-out;
}

.desc-container{
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
  }

    @media screen and (min-width: 768px){

      .btn{
        display: none;
       column-gap:10px;
           
      }

      .product:hover .btn{
        display: flex;
        visibility:visible;
  
      }

        .product:hover{
         box-shadow:var(---shadow-4);
         background-color: var(---white);
         transition:all .1s ease-in-out
      }
    }
`
export default SingleCategoryProductGrid;