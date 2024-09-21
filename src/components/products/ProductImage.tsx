import { nanoid } from "nanoid";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import styled from "styled-components";
import img1 from '../../assets/bag.webp';
import img2 from '../../assets/hm.png';
import img3 from '../../assets/hp.png';
import { ProductImages } from "../../types/general";


export const imgs: ProductImages[] = [
  {
    id: nanoid(),
    img: img1
  },

  {
    id: nanoid(),
    img: img2
  },

  {
    id: nanoid(),
    img: img3
  },
  {
    id: nanoid(),
    img: img2
  },

  {
    id: nanoid(),
    img: img3
  },

]
const ProductImage = ({ images }: { images: ProductImages[] }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const shiftLeft = () => {
    let newIndex = currentIndex - 1;
    setCurrentIndex(() => newIndex)
    setCurrentImage(() => newIndex)
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
  }
  const shiftRight = () => {
    let newIndex = currentIndex + 1;

    setCurrentIndex(() => newIndex)
    setCurrentImage(() => newIndex)

    if (newIndex > images.length - 1) {
      newIndex = 0;
    }
  }

  const handleImageClick = (id: number) => {
    let newIndex = id;

    setCurrentIndex(() => newIndex)
    setCurrentImage(() => newIndex)
  }

  return <Wrapper>
    <img src={images[currentImage].img} className="parent-img" />
    <div className="img-container">
      {
        images.map((image, index) => {
          const { id, img } = image;
          return <div key={id} className={`child-imgs ${index === currentIndex ? 'active-image' : ''}`}  >
            <img src={img} alt="" onClick={() => handleImageClick(index)} />
          </div>
        })
      }
      <button className="left-btn" onClick={() => shiftLeft()}><FiChevronLeft /></button>
      <button className="right-btn" onClick={() => shiftRight()}><FiChevronRight /></button>
    </div>
    <div className="fav-container">
      <button className="fav-btn"><FiHeart /></button>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

    @media screen and (min-width: 1092px){
  .parent-img{
    width: 40rem;
    height: 20rem;
  }



  .img-container{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap:1rem;
   
}

.child-imgs img{
   width: 6rem;
    height: 6rem;
    cursor: pointer;
}



.left-btn,
.right-btn{
  position: absolute;
  top:20%;
  display: flex;
  align-items: center;
  justify-content: center;
  width:3rem;
  height: 3rem;
  font-size: var(---font-Size-1);
  background-color: var(---white);
  border-color:transparent;
  border: var(---secondary) solid 0.5px;
  color: var(---secondary);
  border-radius:50%;
  cursor: pointer;
}
.left-btn{
  left: -5%;
}

.right-btn{
  right: -5%;
}

.active-image{
  border:var(---secondary) solid 1px;
}
}

.fav-container{
  position: absolute;
  top: 10%;
  right: 2%;
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border: var(---secondary) solid 0.5px;
  border-radius:50%;

}

.fav-btn{
  background-color: transparent;
  color: var(---secondary);
  border-color:transparent;
  font-size:var(---fontSize-2);
     cursor: pointer;
}
`
export default ProductImage;