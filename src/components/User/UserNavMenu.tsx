import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Wrapper from "../../css/UserNavMenu"
import { logout } from "../../features/userSlice"
import { hideNavMenu } from "../../features/userToggleSlice"
import { UserMenuType } from "../../types/general"
import { useAppSelector } from "../../util/hooks"
import Icon from "../general/Icon"

const UserNavMenu = ({ data }: { data: UserMenuType[] }) => {

  const { showMenu } = useAppSelector((state) => state.userMenu)
  const { isActive } = useAppSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const logoutUser = () => {
    dispatch(logout());
  }

  window.addEventListener('mouseover', function (e: MouseEvent) {

    const userMenuContainer = userMenuRef.current;

    if (userMenuContainer !== null) {
      const dim = userMenuContainer.getBoundingClientRect();
      let left = dim.left;
      let right = dim.right;
      let bottom = dim.bottom;

      if ((e.clientX < left) || (e.clientX > right) || (e.clientY > bottom)) {
        dispatch(hideNavMenu());
      }
    }
  });

  if (!isActive) {
    return <Wrapper style={{ display: showMenu ? 'flex' : 'none' }} ref={userMenuRef}>
      <div className="user-reg-container">
        <div className="link-title">
          <h4>Witaj w swappi</h4>
        </div>
        <div className="login-container">
          <Link to={'login'} className="login-btn"><span>login</span></Link>
        </div>
        <div className="info">
          <span className="left"></span><span>nie masz konta?</span><span className="right"></span>
        </div>
        <div className="join-container">
          <Link to={'register'} className="join-btn"><span>
            Become a member</span></Link>
        </div>
      </div>
    </Wrapper>
  }

  return <Wrapper style={{ display: showMenu ? 'flex' : 'none' }} ref={userMenuRef}>
    <div className="link-title">
      <h4>Witaj Jon Joe</h4>
    </div>
    <div className="link-container">
      {
        data.map((menu, index) => {
          return <div key={menu.id} className="menu-link-container">
            <Link to={`my-account/${menu.url}`} className="menu-link">
              <Icon icon={menu.icon} />
              <span className="text">{menu.text}</span>
              <span className="counter" style={{ display: menu.quantity ? 'flex' : 'none' }}>{menu.quantity}</span>
            </Link>
            <button style={{ display: index === data.length - 1 ? 'flex' : 'none' }} className="logout-btn" onClick={() => logoutUser()}><span>logout</span></button>
          </div>
        })
      }
    </div>
  </Wrapper>


}

export default UserNavMenu