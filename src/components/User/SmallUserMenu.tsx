import { Link } from "react-router-dom"
import Wrapper from "../../css/SmallMenu"
import { useAppSelector } from "../../hooks/hooks"
import { useLogout } from "../../hooks/useLogout"
import { TUserMenu } from "../../types/TUserMenu"
import Icon from "../general/Icon"

const UserNavMenu = ({ data }: { data: TUserMenu[] }) => {
  const firstName = useAppSelector((state) => state.userSlice.firstName)
  const lastName = useAppSelector((state) => state.userSlice.lastName)
  const [logout] = useLogout()

  return <Wrapper >
    <div className="menu-title">
      <h4>Witaj {`${firstName}  ${lastName}`}</h4>
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
            <button style={{ display: index === data.length - 1 ? 'flex' : 'none' }} className="logout-btn" onClick={() => logout()}><span>logout</span></button>
          </div>
        })
      }
    </div>

  </Wrapper >


}

export default UserNavMenu