import { useEffect, useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import styled from "styled-components"
import { Category } from "../../types/general"
import { category } from "../../util/data"
import { useAppSelector } from "../../util/hooks"
import ParentCategory from "./ParentCategory"
import SidebarCategory from "./SidebarCategory"

const SidebarContent = () => {
  const [data, setData] = useState<Category[]>(category)
  const [level, setLevel] = useState<number>(0);
  const [title, setTitle] = useState<string>();
  const [callStack, setCallStack] = useState<Category[]>([]);
  const showSidebar = useAppSelector((state) => state.userMenu.showSidebar);


  let handleRightClick = (id: string) => {
    let selected = data.find((item) => item.category === id);
    if (selected) {
      setLevel(() => 1)
      setData(() => selected?.sub)
      setTitle(() => selected.category)
      const dat = [...callStack, selected];
      setCallStack(() => dat)

    }
  }

  function findLast() {
    const item = callStack.find((_, index) => index === callStack.length - 1);
    return item;
  }


  const handleLeftClick = () => {
    const lastItem = findLast();
    if (lastItem?.category === title) {
      callStack.pop();
    }
    if (callStack.length > 0) {
      let temp = callStack.pop();
      if (temp) {
        setData(() => temp?.sub)
        setTitle(() => temp.category)
      }
    } else {
      setData(() => category)
      setLevel(() => 0);
    }

  }


  useEffect(() => {
    if (!showSidebar) {
      setData(() => category)
      setLevel(() => 0);
      setCallStack(() => [])
    }

  }, [showSidebar])



  if (level > 0) {

    return <Wrapper>
      <div className="category-title">
        <button className="left-btn" onClick={() => handleLeftClick()}> <FiChevronLeft /></button>
        <div className="title-container">
          <h2 className="title">{title}</h2>
        </div>
      </div>
      {
        data.map((cate) => {
          return <div key={cate.id} className="child-category">
            <SidebarCategory {...cate} />
            <button className="right-btn" onClick={() => handleRightClick(cate.category)} style={{ display: cate.hasChildren() ? 'flex' : 'none' }}> <FiChevronRight /></button>
          </div>
        })
      }
    </Wrapper>
  }

  return <Wrapper>
    {
      data.map((cate) => {
        return <div key={cate.id} className="parent-category">
          <ParentCategory {...cate} />
          <button className="right-btn" onClick={() => handleRightClick(cate.category)} style={{ display: cate.hasChildren() ? 'flex' : 'none' }}> <FiChevronRight /></button>
        </div>
      })
    }
  </Wrapper>

}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top:1rem;
  
  .title-container{
  display: flex;
  justify-content: center;
  width: 80%;
  }

  .parent-category,
  .child-category{
    display: flex;
    align-items: center;
    justify-content: space-between;
      max-width: var(---maxWidth-2);
      margin: 0 auto;
      width: 100%;
  }



  .right-btn,
  .left-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-color:transparent;
    font-size: 1.5rem;
    color: var(---textColor-3);
    cursor: pointer;
  }

  .category-container{
    display: flex;
    flex-direction: column;
  }

  .category-title{
    display: flex;
    border-bottom:var(---textColor-1) solid 1px;
  }

  .category{
    display: flex;
    align-items: center;
    column-gap:10px;
    color: var(---textColor-3);
  }

  .category svg{
    font-size:2rem;
  }
`
export default SidebarContent