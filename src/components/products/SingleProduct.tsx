import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetProductQuery } from "../../features/api/productsApi";
import { SingleProductDto } from "../../types/general";
import BuyerInformation from "../general/BuyerInformation";
import Loading from "../general/Loading";
import FeaturedProducts from "./FeaturedProducts";
import PictureSlider from "./PictureSlider";
import ProductCartInfo from "./ProductCartInfo";
import ProductImage from "./ProductImage";
import SingleProductDescription from "./SingleProductDescription";
import SingleProductParameters from "./SingleProductParameters";

const def: SingleProductDto = {
  name: '',
  price: 1,
  productAttributeDTO: [],
  productCategoryList: [],
  id: 0,
  description: "",
  productImages: [],
  isFavourite: false
}

const SingleProduct = () => {


  const id = parseInt(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));

  const { data, isLoading } = useGetProductQuery(id)


  if (isLoading) {
    return <Loading />
  }
  if (!data) {
    return <p>Product does not exist</p>
  }


  return <Wrapper>
    <header className="link-header">
      <div className="category-link-container">
        {
          data.productCategoryList?.map((category, index) => {
            return <div key={category} className={`category-link ${index === data.productCategoryList?.length - 1 ? 'active-link' : ''}`}>
              <Link className="link" to={`/${category},${index}`} >{category}</Link>
              <FiChevronRight style={{ display: index === data.productCategoryList.length - 1 ? 'none' : 'flex' }} />
            </div>
          })
        }
      </div>
    </header>
    <div className="parent">
      <section className="main-container">
        <div className="product-imgs">
          <div className="medium-screen">
            <ProductImage productImages={data.productImages} productId={data.id} />
          </div>
          <div className="small-screen">
            <PictureSlider productImages={data.productImages} />
          </div>
        </div>
        <div className="small-info-section">
          <ProductCartInfo id={id} price={data.price} reducedPrice={data.reducedPrice ? data.reducedPrice : 0.00} name={data.name} productAttributeDTO={data.productAttributeDTO} />
          <BuyerInformation />
        </div>
        <div className="product-description">
          <SingleProductDescription desc={data.description} />
        </div>
        <div className="product-parameters">
          <SingleProductParameters parameterName="Colour" parameter="red" />
          <SingleProductParameters parameterName="Size" parameter="46" />
          <SingleProductParameters parameterName="Material" parameter="Cotton" />
        </div>
      </section>
      <section className="info-section">
        <ProductCartInfo id={id} price={data.price} reducedPrice={data.reducedPrice ? data.reducedPrice : 0.00} name={data.name} productAttributeDTO={data.productAttributeDTO} />
        <BuyerInformation />
      </section>
    </div>
    <div className="products">
      <FeaturedProducts title="Podobno produkty" data={[]} />
    </div>
  </Wrapper>

}

const Wrapper = styled.section`
display: flex;
flex-direction: column;
width: 100vw;
background-color: var(---ghost);

.link-header{
  display: flex;
  max-width: var(---maxWidth-1);
  margin: 1rem  auto;
  width: 100%;
}

.category-link-container{
  display: flex;
  align-items: center;
}



.category-link{
  display: flex;
  align-items: center;

}

.category-link a{
    color: var(---textColor);
}

.active-link a{
  color: var(---primary);
}

 .parent{
   display: flex;
   flex-direction:column;
  row-gap:2rem;
   width: 100%;
  margin: 0 auto;

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
    width: 100%;
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

   
`
export default SingleProduct;