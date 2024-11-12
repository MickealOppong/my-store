
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight, FiShare } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/hooks";
import { useAddToFavourite } from "../../hooks/useAddToFavourite";
import { useFetchIsFavourite } from "../../hooks/useIsFavourite";



const ProductImage = ({ productImages, productId }: { productImages: string[], productId: number }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const location = useLocation();
  const navigate = useNavigate()

  //add  to favourite

  const username = useAppSelector((state) => state.userSlice.username)

  const { addProductToFavourite, response } = useAddToFavourite(productId, username);
  const { checkIsFavourite, isFavourite } = useFetchIsFavourite(username, productId)


  useEffect(() => {
    checkIsFavourite()

  }, [response])
  const handleFavBtnClick = () => {
    if (!username) {
      navigate('/login')
      return
    }
    addProductToFavourite()
  }
  const shiftLeft = () => {
    let newIndex = currentIndex - 1;
    setCurrentIndex(() => newIndex)
    setCurrentImage(() => newIndex)
    if (newIndex < 0) {
      newIndex = productImages.length - 1;
    }
  }
  const shiftRight = () => {
    let newIndex = currentIndex + 1;

    setCurrentIndex(() => newIndex)
    setCurrentImage(() => newIndex)

    if (newIndex > productImages.length - 1) {
      newIndex = 0;
    }
  }

  const handleImageClick = (id: number) => {
    let newIndex = id;

    setCurrentIndex(() => newIndex)
    setCurrentImage(() => newIndex)
  }

  const shareData = {
    title: "product",
    text: "Learn web development on MDN!",
    url: location.pathname,
  };

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
      console.log("MDN shared successfully");
      ;
    } catch (err) {
      console.log(`Error: ${err}`);

    }
  }

  return <Wrapper>
    <img src={productImages[currentImage]} className="parent-img" />
    <div className="img-container">
      {
        productImages.map((image, index) => {

          return <div key={index} className={`child-imgs ${index === currentIndex ? 'active-image' : ''}`}  >
            <img src={image} alt="" onClick={() => handleImageClick(index)} />
          </div>
        })
      }
      <button className="left-btn" onClick={() => shiftLeft()}><FiChevronLeft /></button>
      <button className="right-btn" onClick={() => shiftRight()}><FiChevronRight /></button>
    </div>
    <div className="fav-container">
      <button className="fav-btn" onClick={() => handleFavBtnClick()}>
        {isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div>
    <div className="share-container">
      <button className="share-btn" onClick={() => handleShare()}><FiShare /></button>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;


    @media screen and (min-width: 768px){

  .parent-img{
    width: 100%;
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
   width: 4rem;
    height: 4rem;
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
  font-size: var(---fontSize-1);
  background-color: var(---white);
  border-color:transparent;
  border: var(---primary) solid 0.5px;
  color: var(---primary);
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
  border:var(---primary) solid 1px;
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
  border: var(---primary) solid 0.5px;
  border-radius:50%;

}

.share-container{
    position: absolute;
  top: 25%;
  right: 2%;
  display: flex;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border: var(---primary) solid 1px;
  border-radius:50%;
}

.fav-btn{
  background-color: transparent;
  color: var(---primary);
  border-color:transparent;
  font-size:var(---fontSize-1);
   cursor: pointer;
}

.share-btn{
  background-color: transparent;
  color: var(---primary);
  border-color:transparent;
  font-size:var(---fontSize-1);
  cursor: pointer;
}

    @media screen and (min-width: 1092px){
      .child-imgs img{
   width: 6rem;
    height: 6rem;
    cursor: pointer;
}
    }
`
export default ProductImage;