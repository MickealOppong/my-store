import styled from "styled-components";
import { OrderLines } from "../../types/general";
import OrderedProduct from "./OrderedProduct";

const OrderedProducts = ({ products }: { products: OrderLines[] }) => {


  return <Wrapper>
    <div>
      {
        products.map((product) => {
          return <OrderedProduct {...product} key={product.productId} />
        })
      }
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  

  .input-width{
    width: 100%;
    height: 6rem;
  }
`
export default OrderedProducts