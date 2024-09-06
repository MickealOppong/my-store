import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Wrapper from "../../css/BigBrands";
import { ProductBrands } from "../../types/general";
import { brands } from "../../util/data";
import Brand from "./Brand";


const Brands = () => {
  const [brandData] = useState<ProductBrands[]>(brands);
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
    <div className="brand-list">
      {
        brandData.map((br, index) => {
          return <div className="brand" key={br.id} style={{ transform: `translateX(${(index - currIndex) * 1}%)`, transition: '1s' }}>
            <Brand {...br} />
          </div>
        })
      }
    </div>

    <button className="left-btn" style={{ display: currIndex === 0 ? 'none' : 'flex' }} onClick={() => shiftLeft()}><FaChevronLeft /></button>
    <button className="right-btn" style={{ display: counter === Math.floor(brandData.length / 5) ? 'none' : 'flex' }} onClick={() => shiftRight()}><FaChevronRight /></button>
  </Wrapper>
}


export default Brands