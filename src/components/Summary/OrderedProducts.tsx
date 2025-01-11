import styled from "styled-components";
import { OrderLines } from "../../types/general";
import OrderedProduct from "./OrderedProduct";

const OrderedProducts = ({ products }: { products: OrderLines[] }) => {


  return <Wrapper>
    <div className="product-container">
      {
        products.map((product) => {
          return <OrderedProduct {...product} key={product.productId} />
        })
      }
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  
display: flex;
width: 100%;

.product-container{
display: flex;
flex-direction: column;
row-gap: 1rem;
width: 100%;
}
  .input-width{
    width: 100%;
    height: 6rem;
  }
`
export default OrderedProducts