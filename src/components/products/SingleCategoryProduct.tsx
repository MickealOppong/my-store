import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../../types/general";

const SingleCategoryProduct = ({ img, description, price, shipping }: Product) => {
  return <Wrapper>
    <div className="product-container">
      <Link to={'/product'} className="product">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="details-container">
          <span className="description">{description.substring(0, 40)}</span>
          <span className="price">{price}</span>
          <span className="shipping">{shipping}</span>
        </div>
      </Link>
      <div className="btns">
        <button className="add-to-fav"><AiOutlineHeart /></button>
        <button className="add-to-cart"><AiOutlineShopping /></button>
      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
 
 .product-container{
   position: relative;
   display: flex;
 }
.product{
display: flex;
width: 100%;
column-gap:20px;
background-color: var(---white);
padding: 1rem;
  transition:all .1s ease-in-out
}

img{
  width: 12rem;
  height: 12rem;
}

.details-container{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.btns{
  position: absolute;
  top:30%;
  right: 5%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}



.add-to-fav{
   display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border-color:transparent;
  border: var(---primary) solid 1px;
  border-radius:50%;
  transition: all .2s ease-in-out;
}

.add-to-cart{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---primary);
  color: var(---white);
  border-color:transparent;
  border-radius:50%;
}

.add-to-cart:hover{
  transform:scale(1.1);
  transition: all .2s ease-in-out;
}

.add-to-fav,
.add-to-cart{
    font-size:1.6rem;
}

.add-to-fav svg{
 color: var(---primary);
}


.add-to-fav:hover{
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



      .btn{
        display: none;
       flex-direction: row;
       column-gap:10px;
           
      }

      .product:hover .btn{
        display: flex;
        visibility:visible;
  
      }

        .product:hover{
         box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
         background-color: var(---white);
         transition:all .1s ease-in-out
      }
    }

      @media screen and (min-width: 1092px){


    img{
     width: 18rem;
     height: 18rem;
     }   
    }
`
export default SingleCategoryProduct;