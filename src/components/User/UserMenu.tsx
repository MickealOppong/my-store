import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Wrapper from "../../css/UserMenu"
import { hideUserMenu } from "../../features/userMenuSlice"
import { UserMenuType } from "../../types/general"
import { useAppSelector } from "../../util/hooks"
import Icon from "../general/Icon"

const UserMenu = ({ data }: { data: UserMenuType[] }) => {

  const { showMenu } = useAppSelector((state) => state.userMenu)
  const { isActive } = useAppSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const userMenuRef = useRef<HTMLDivElement>(null);

  window.addEventListener('mouseover', function (e: MouseEvent) {

    const userMenuContainer = userMenuRef.current;
    if (userMenuContainer !== null) {
      const dim = userMenuContainer.getBoundingClientRect();
      let left = dim.left;
      let right = dim.right;
      let bottom = dim.bottom;

      if ((e.pageX < left) || (e.pageX > right) || (e.pageY > bottom)) {
        dispatch(hideUserMenu());
      }
    }
  });

  if (!isActive) {
    return <Wrapper style={{ display: showMenu ? 'flex' : 'none' }}>
      <div>
        <button>login</button>
      </div>
      <div>
        <button>become a member</button>
      </div>
    </Wrapper>
  }

  return <Wrapper style={{ display: showMenu ? 'flex' : 'none' }} ref={userMenuRef}>
    <div className="link-title">
      <h4>Witaj Jon Joe</h4>
    </div>
    <div className="link-container">
      {
        data.map((menu) => {
          return <Link to={`${menu.url}`} key={menu.id} className="menu-link">
            <Icon icon={menu.icon} />
            <span className="text">{menu.text}</span>
            <span className="counter" style={{ display: menu.quantity ? 'flex' : 'none' }}>{menu.quantity}</span>
          </Link>
        })
      }
    </div>
  </Wrapper>


}

export default UserMenu