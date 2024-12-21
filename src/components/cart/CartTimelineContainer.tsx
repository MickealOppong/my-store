import { nanoid } from "nanoid"
import styled from "styled-components"
import { Timeline } from "../../types/general"
import CartTimeline from "./CartTimeline"

export const timelineData: Timeline[] = [
  {
    id: nanoid(),
    text: 'Your basket',
    url: '/cart',
  },
  {
    id: nanoid(),
    text: 'Delivery and payment',
    url: '/cart/checkout',
  },
  {
    id: nanoid(),
    text: 'Done',
    url: '/cart/summary',
  },
]

const CartTimelineContainer = () => {

  return <Wrapper>
    <CartTimeline data={timelineData} />
  </Wrapper>

}
const Wrapper = styled.div`
margin-top:1rem;
 width: 90vw;

  @media screen and (min-width: 1092px) {
      width: 60vw;
  }
`

export default CartTimelineContainer