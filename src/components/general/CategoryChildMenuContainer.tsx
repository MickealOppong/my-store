import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { hideChildMenu } from "../../features/userToggleSlice";
import { useAppSelector } from "../../hooks/hooks";

const CategoryChildMenuContainer = () => {
  const showChildCategoryMenu = useAppSelector((state) => state.userMenu.showChildCategoryMenu)
  const menuRef = useRef<HTMLDivElement>(null);
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
    <h2>to be completed</h2>
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