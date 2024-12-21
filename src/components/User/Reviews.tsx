import { Store } from "@reduxjs/toolkit"
import styled from "styled-components"

export const loader = (store: Store) => async () => {

  return null;
}
const Reviews = () => {

  return <Wrapper >
    <div>
      <h2>Reviews</h2>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  display: flex;
  width: 70vw;
 

`
export default Reviews