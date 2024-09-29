import styled from "styled-components"
import { ProductImages } from "../../types/general"


const PictureSlide = ({ img, id }: ProductImages) => {
  return <Wrapper>
    <div className="image">
      <img src={img} alt={id} />
    </div>
  </Wrapper>
}
const Wrapper = styled.div`


.image img{
width: 100vw;
height: 30vh;
}
`
export default PictureSlide