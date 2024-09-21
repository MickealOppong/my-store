import styled from "styled-components";
import ProductCartInfo from "./ProductCartInfo";
import ProductImage, { imgs } from "./ProductImage";
import SingleProductDescription from "./SingleProductDescription";
import SingleProductParameters from "./SingleProductParameters";

const SingleProduct = () => {
  return <Wrapper>
    <div className="parent">
      <section className="main-container">
        <div className="product-imgs">
          <ProductImage images={imgs} />
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
      <ProductCartInfo />
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
background-color: var(---bgColor-1);

 .parent{
   display: flex;
  column-gap:2rem;
   max-width: var(---maxWidth-1);
   width: 100%;
  margin: 2rem auto;

 }

  @media screen and (min-width: 1092px){
    
  .main-container{
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
   width: 100%;
  }

.product-imgs{
  background-color: var(---white);
  width: 100%;
padding-bottom:1rem;
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

  }
`
export default SingleProduct;