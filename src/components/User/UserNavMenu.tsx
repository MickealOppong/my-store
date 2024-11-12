import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Wrapper from "../../css/UserNavMenu"
import { hideNavMenu } from "../../features/userToggleSlice"
import { useAppSelector, useLogout } from "../../hooks/hooks"
import { useFetchFavouriteQuantity } from "../../hooks/useFetchFavouriteQuantity"
import { UserMenuType } from "../../types/general"
import { getFromLocalStorage } from "../../util/util"
import Icon from "../general/Icon"

const UserNavMenu = ({ data }: { data: UserMenuType[] }) => {

  const { showMenu } = useAppSelector((state) => state.userMenu)
  const { firstName, lastName, isActive } = useAppSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [logout] = useLogout(getFromLocalStorage('utk'))
  const { quantity } = useFetchFavouriteQuantity()
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
      <div className="link-title">
        <h4>Witaj w za</h4>
      </div>
      <div className="user-reg-container">
        <div className="login-container">
          <Link to={'login'} className="login-btn"><span>login</span></Link>
        </div>
        <div className="info">
          <span className="left"></span>
          <span className="msg">nie masz konta?</span>
          <span className="right"></span>
        </div>
        <div className="join-container">
          <Link to={'register'} className="join-btn"><span>
            sign up</span></Link>
        </div>
      </div>
    </Wrapper>
  }

  return <Wrapper style={{ display: showMenu ? 'flex' : 'none' }} ref={userMenuRef}>
    <div className="link-title">
      <h4>Witaj {firstName + " " + lastName}</h4>
    </div>
    <div className="link-container">
      {
        data.map((menu, index) => {
          return <div key={menu.id} className="menu-link-container">
            <Link to={`my-account/${menu.url}`} className="menu-link">
              <Icon icon={menu.icon} />
              <span className="text">{menu.text}</span>
              <span className="counter" style={{ display: menu.text.toLowerCase() === 'favourites' ? 'flex' : 'none' }}>{quantity}</span>
            </Link>
            <button style={{ display: index === data.length - 1 ? 'flex' : 'none' }} className="logout-btn" onClick={() => logout()}><span>logout</span></button>
          </div>
        })
      }
    </div>
  </Wrapper>


}

export default UserNavMenu