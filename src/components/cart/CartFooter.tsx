import styled from "styled-components"

const CartFooter = () => {
  return <Wrapper>
    <div className="parent">
      <h2>swappi</h2>
    </div>
    <div className="foot">

    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 background-color: var(---bgColor-1);

 .parent{
  display: flex;
  align-items: center;
  justify-content:right;
  max-width: var(---maxWidth-1);
  margin: 0 auto;
  width: 100%;
  color: var(---secondary);
 }

 .foot{
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: var(---white);
 }
`
export default CartFooter