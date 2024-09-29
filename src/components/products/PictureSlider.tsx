import { useState } from "react";
import styled from "styled-components";
import PictureSlide from "./PictureSlide";
import { imgs } from "./ProductImage";

const PictureSlider = () => {
  const [currIndex, setCurrIndex] = useState<number>(3);
  const handleClick = (index: number) => {
    let newIndex = index;
    setCurrIndex(() => newIndex)
  }
  return <Wrapper>
    <div className="images">
      {
        <PictureSlide {...imgs[currIndex]} />
      }
      <div className="btns">
        {
          Array.from({ length: imgs.length }, (_, index) => {
            return <span className={`dot-btn ${index === currIndex ? 'active-btn' : ''}`} key={index} onClick={() => handleClick(index)}></span>
          })
        }
      </div>
    </div>

  </Wrapper>
}
const Wrapper = styled.div`
width: 100vw;

.images{
  position: relative;
  display: flex;
}
 
 .btns{
  position: absolute;
  top: 95%;
  left: 40%;
  display: flex;
  align-items: center;
  column-gap:10px;
 }

 .dot-btn{
  width: 10px;
  height: 10px;
  border-radius:50%;
  background-color: var(---bgColor-1);
  border-color:transparent;
  cursor: pointer;
 }

 .active-btn{
   background-color: var(---secondary);
 }
`
export default PictureSlider