import styled from "styled-components"
import { OrderLines } from "../../types/general"
import FormInput from "../general/FormInput"
import SingleProduct from "./SingleProduct"

const CheckoutProducts = ({ products }: { products: OrderLines[] }) => {

  return <Wrapper>
    <div>
      {
        products.map((product) => {
          return <SingleProduct {...product} key={product.productId} />
        })
      }
    </div>
    <div>
      <form >
        <FormInput type="text" name="message" width="input-width" placeholder="Message (optional)" label="" value="" handleChange={() => ''} />
      </form>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  

  .input-width{
    width: 100%;
    height: 6rem;
  }
`
export default CheckoutProducts