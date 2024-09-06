import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Wrapper from "../../css/ItemCategory";
import { ItemCategory } from "../../types/general";
import SectionTitle from "./SectionTitle";
import SingleCategory from "./SingleCategory";
let CategoryContainer = ({ data, title }: { data: ItemCategory[], title: string }) => {

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
    <div className="title">
      <SectionTitle title={title} />
    </div>
    <div className="categories">
      {
        data.map((item, index) => {
          return <div key={item.id} className="category-list" style={{ transform: `translateX(${(index - currIndex) * 1}%)`, transition: '1s' }}>
            <SingleCategory {...item} />
          </div>
        })
      }
    </div>
    <button className="left-btn" onClick={() => shiftLeft()}><FaChevronLeft /></button>
    <button className="right-btn" onClick={() => shiftRight()}><FaChevronRight /></button>
  </Wrapper>

}
export default CategoryContainer;