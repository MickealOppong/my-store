import styled from "styled-components"


const PictureSlide = ({ img }: { img: string }) => {
  return <Wrapper>
    <div className="image">
      <img src={img} alt={img} />
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