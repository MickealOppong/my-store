import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import Wrapper from "../../css/FeaturedProduct"
import { SelectedProduct } from "../../types/general"
import SectionTitle from "../general/SectionTitle"
import FeaturedProduct from "./FeaturedProduct"

const FeaturedProducts = ({ data, title }: { data: SelectedProduct[], title: string }) => {

  const [currIndex, setCurrIndex] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);

  const shiftLeft = () => {
    setCurrIndex(() => currIndex - 500)
    setCounter(() => counter - 1)
  }

  const shiftRight = () => {
    setCurrIndex(() => currIndex + 500)
    setCounter(() => counter + 1)
  }

  return <Wrapper>
    <div className="products-container">
      <div className="title">
        <SectionTitle title={title} />
      </div>
      <div className="products">
        {
          data?.map((product, index) => {
            return <div key={index} style={{ transform: `translateX(${(index - currIndex) * 1}%)`, transition: '1s' }}>
              <FeaturedProduct {...product} />
            </div>
          })
        }
      </div>
    </div>
    <button className="left-btn" onClick={() => shiftLeft()}><FaChevronLeft /></button>
    <button className="right-btn" onClick={() => shiftRight()}><FaChevronRight /></button>
  </Wrapper>
}
export default FeaturedProducts