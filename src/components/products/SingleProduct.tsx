import styled from "styled-components";
import { polecamy } from "../../util/data";
import BuyerInformation from "../general/BuyerInformation";
import FeaturedProducts from "./FeaturedProducts";
import PictureSlider from "./PictureSlider";
import ProductCartInfo from "./ProductCartInfo";
import ProductImage, { imgs } from "./ProductImage";
import SingleProductDescription from "./SingleProductDescription";
import SingleProductParameters from "./SingleProductParameters";

const SingleProduct = () => {
  return <Wrapper>
    <div className="parent">
      <section className="main-container">
        <div className="product-imgs">
          <div className="medium-screen">
            <ProductImage images={imgs} />
          </div>
          <div className="small-screen">
            <PictureSlider />
          </div>
        </div>
        <div className="small-info-section">
          <ProductCartInfo />
          <BuyerInformation />
        </div>
        <div className="product-description">
          <SingleProductDescription desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
        <div className="product-parameters">
          <SingleProductParameters parameterName="Colour" parameter="red" />
          <SingleProductParameters parameterName="Size" parameter="46" />
          <SingleProductParameters parameterName="Material" parameter="Cotton" />
        </div>
      </section>
      <section className="info-section">
        <ProductCartInfo />
        <BuyerInformation />
      </section>
    </div>
    <div className="products">
      <FeaturedProducts title="Podobno produkty" data={polecamy} />
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
width: 100vw;
background-color: var(---bgColor-1);

 .parent{
   display: flex;
   flex-direction:column;
  row-gap:2rem;
   width: 100%;
  margin: 2rem auto;

 }

   .main-container{
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

 .small-screen{
  display: flex;
 }

 .medium-screen{
  display: none;
 }

   .small-info-section{
    display: flex;
    flex-direction: column;
    row-gap: 2em;
  }

     .info-section{
    display: none;
  }

    .product-description{
    display: flex;
  }

    .product-parameters{
    display: flex;
    flex-direction: column;
    background-color: lightblue;
  }

  .product-imgs{
  background-color: var(---white);
  width: 100%;
  padding-bottom:1rem;
}

.parameters{
  display: flex;
  width: 100%;
}


  @media screen and (min-width: 768px){
    

 .parent{
   display: flex;
   flex-direction:row;
  column-gap:2rem;
   max-width: var(---maxWidth-1);
   width: 100%;
  margin: 2rem auto;

 }

    .small-screen{
      display: none;
    }
    .medium-screen{
      display: flex;
    }

       .small-info-section{
    display: none;
  }

  .main-container{
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .info-section{
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    width: 30rem;
  }


  

  .product-description{
    display: flex;
  width: 100%;
  background-color:lightblue;
  }

    .product-parameters{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20rem;
    background-color:rebeccapurple;
  }


.parameters{
  display: flex;
  align-items: center;
  column-gap:2rem;
}

.products{
  width: 100%;
  margin-bottom:3rem;
}
  }

    @media screen and (min-width: 768px){
      .main-container{
   width: 100%;
  }
 
    }
`
export default SingleProduct;