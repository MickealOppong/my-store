import styled from "styled-components"
import { CartContainer, FeaturedProducts } from "../components/index"
import { polecamy } from "../util/data"

const Orders = () => {
  return <Wrapper>
    <div className="cart">
      <CartContainer />
    </div>
    <FeaturedProducts title="You might also " data={polecamy} />
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;

 .cart{
   display: flex;
  flex-direction: column;
 }


 @media screen and (min-width: 768px) {
   .cart{
  max-width: var(---maxWidth-1);
  margin: 0 auto;
 }
 }
`
export default Orders