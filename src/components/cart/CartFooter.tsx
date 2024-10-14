import styled from "styled-components"

const CartFooter = () => {
  return <Wrapper>
    <div className="parent">
      <h2>za</h2>
    </div>

  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 background-color: var(---ghost);

 .parent{
  display: flex;
  align-items: center;
  justify-content:right;
  max-width: var(---maxWidth-1);
  margin: 0 auto;
  width: 100%;
  color: var(---primary);
  font-style:italic;
 }

 .foot{
  display: flex;
  width: 100%;
  height: 4rem;
  background-color: var(---white);
 }
`
export default CartFooter