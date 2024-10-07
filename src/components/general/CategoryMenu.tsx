import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideChildMenu } from "../../features/userToggleSlice";
import { categoryMain } from "../../util/data";
import CategoryMenuItem from "./CategoryMenuItem";

const CategoryMenu = () => {
  const parentMenuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();


  window.addEventListener('mouseover', function (e: MouseEvent) {
    const userMenuContainer = parentMenuRef.current;

    if (userMenuContainer !== null) {
      const dim = userMenuContainer.getBoundingClientRect();

      let left = dim.left;

      if ((e.clientX < left)) {
        dispatch(hideChildMenu());
      }
    }
  });

  return <Wrapper className="category" ref={parentMenuRef}>
    {
      categoryMain.map((cate) => {
        return <div key={cate.id} className="child-category">
          <CategoryMenuItem {...cate} />
        </div>
      })
    }

  </Wrapper>
}


const Wrapper = styled.div`
display: none;

background-color: var(---white);

@media screen and (min-width:768px) {
display: flex;
flex-direction: column;
width: 20vw;
z-index: 0;

.child-category{
 display: flex;
 margin-left:1rem;
}

.category-item{
  display: flex;
  align-items: center;
  column-gap:10px;
  color: var(---textColor-3);
}

.category-item:hover{
  color: var(---secondary);
}
.category-item svg{
  font-size:2rem;
}


}

@media screen and (min-width:1092px){

.child-category{
 display: flex;
 margin-left:2rem;
}
}
`

export default CategoryMenu


