import { FiHeart, FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";
import { Product } from "../../types/general";

const SingleCategoryProductGrid = ({ img, description, price, shipping }: Product) => {
  return <Wrapper>
    <div className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="details-container">
        <span className="description">{description.substring(0, 40)}</span>
        <span className="price">{price}</span>
        <span className="shipping">{shipping}</span>
      </div>
      <div className="btn-div">
        <button className="fav-btn"><FiHeart /></button>
        <button className="cart-btn"><FiShoppingCart /></button>
      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
width: 100%;

.product{
  position: relative;
display: flex;
flex-direction: column;
row-gap: 2px;
height: 45vh;
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

.btn-div{
  position: absolute;
  right: 5%;
  top:30%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

}

.fav-btn,
.cart-btn{
    font-size:1.2rem;
}

.fav-btn svg{
 color: var(---secondary);
}

.fav-btn:hover{
  background-color: #8d8d93;
  transform:scale(1.1);
  transition: all .2s ease-in-out;
  color: var(---white);
}


.fav-btn{
   display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-color:transparent;
  border: var(---secondary) groove 1px;
  border-radius:50%;
  transition: all .2s ease-in-out;
}

.cart-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---secondary);
  color: var(---white);
  border-color:transparent;
  border-radius:50%;
}

.cart-btn:hover{
  transform:scale(1.1);
  transition: all .2s ease-in-out;
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

      .btn-container{
        display: none;
       column-gap:10px;
           
      }

      .product:hover .btn-container{
        display: flex;
        visibility:visible;
  
      }

        .product:hover{
         box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
         background-color: var(---white);
         transition:all .1s ease-in-out
      }
    }
`
export default SingleCategoryProductGrid;