import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideChildMenu } from "../../features/userToggleSlice";
import { Category } from "../../types/general";
import { categoryMain } from "../../util/data";
import { useAppSelector } from "../../util/hooks";

const CategoryChildMenuContainer = () => {
  const showChildCategoryMenu = useAppSelector((state) => state.userMenu.showChildCategoryMenu)
  const menuItem = useAppSelector((state) => state.userMenu.menuItem)
  const menuRef = useRef<HTMLDivElement>(null);
  const [data] = useState<Category[]>(categoryMain);
  const selected = data.find((item) => item.category === menuItem)
  const dispatch = useDispatch();



  window.addEventListener('mouseover', function (e: MouseEvent) {
    const userMenuContainer = menuRef.current;
    //console.log('mx', e.clientX, 'my', e.clientY);

    if (userMenuContainer !== null) {
      const dim = userMenuContainer.getBoundingClientRect();

      let top = dim.top;
      let bottom = dim.bottom;
      let right = dim.right;

      //console.log("top", top, 'bottom', bottom, 'right', right);

      if ((e.clientY < top) || (e.clientY > bottom) || (e.clientX > right)) {
        dispatch(hideChildMenu());
      }
    }
  });


  return <Wrapper style={{ display: showChildCategoryMenu ? 'flex' : 'none' }
  } ref={menuRef}>
    {
      selected?.sub.map((item) => {
        return <div key={item.id}>
          <h2>{item.category}</h2>
          <div>
            {
              item?.sub.map((child) => {
                return <span key={child.id}>{child.category}</span>
              })
            }
          </div>
        </div>
      })
    }
  </Wrapper>
}

const Wrapper = styled.div`

  position: absolute;
  width: 50vw;
  height: 60vh;
  z-index: 200;
  background-color: lightblue;
 
`
export default CategoryChildMenuContainer