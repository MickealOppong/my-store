import { Link } from "react-router-dom"
import Wrapper from "../../css/SmallMenu"
import { logout } from "../../features/userSlice"
import { UserMenuType } from "../../types/general"
import { useAppDispatch } from "../../util/hooks"
import Icon from "../general/Icon"

const UserNavMenu = ({ data }: { data: UserMenuType[] }) => {
  const dispatch = useAppDispatch();
  const logoutUser = () => {
    dispatch(logout());
  }
  return <Wrapper >
    <div className="menu-title">
      <h4>Witaj Jon Joe</h4>
    </div>
    <div className="menu-container">
      {
        data.map((menu, index) => {
          return <div key={menu.id} className="menu-link-container">
            <Link to={`${menu.url}`} className="menu-link">
              <div className="link">
                <Icon icon={menu.icon} />
                <span className="text">{menu.text}</span>
              </div>
              <span className="counter" style={{ display: menu.quantity ? 'flex' : 'none' }}>{menu.quantity}</span>
            </Link>
            <button style={{ display: index === data.length - 1 ? 'flex' : 'none' }} className="logout-btn" onClick={() => logoutUser()}><span>logout</span></button>
          </div>
        })
      }
    </div>

  </Wrapper >


}

export default UserNavMenu