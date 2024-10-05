import { Outlet } from "react-router-dom"
import styled from "styled-components"
import { CartTimelineContainer } from "../components"

const Cart = () => {

  return <Wrapper>
    <div className="timeline">
      <CartTimelineContainer />
    </div>
    <section className="outlet">
      <Outlet />
    </section>
  </Wrapper>
}
const Wrapper = styled.section`
display: flex;
flex-direction: column;
width: 100vw;
background-color: var(---bgColor-1);


.parent{
  display: flex;    
  flex-direction: column;
  width: 100%;
}


@media screen and (min-width: 768px) {

    .timeline{
         display: flex;
      max-width: var(---maxWidth-1);
      margin: 1rem auto;
      width: 100%;
  }
}


@media screen and (min-width: 1092px) {
  
    .timeline{
      display: flex;
      max-width: var(---maxWidth-2);
      margin: 1rem auto;
      width: 100%;
  }
}
`
export default Cart