import { Link } from "react-router-dom"
import Wrapper from "../../css/UserMenu"
import { useAppSelector } from "../../hooks/hooks"
import { useFetchFavouriteQuantity } from "../../hooks/useFetchFavouriteQuantity"
import { useLogout } from "../../hooks/useLogout"
import { UserMenuType } from "../../types/general"
import Icon from "../general/Icon"

const UserNavMenu = ({ data }: { data: UserMenuType[] }) => {
  const firstName = useAppSelector((state) => state.userSlice.firstName);
  const lastName = useAppSelector((state) => state.userSlice.lastName);
  const [logout] = useLogout()
  const { quantity } = useFetchFavouriteQuantity()


  return <Wrapper >
    <div className="menu-title">
      <h4>Witaj {firstName + " " + lastName}</h4>
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
              <span className="counter" style={{ display: menu.text.toLowerCase() === 'favourites' ? 'flex' : 'none' }}>{quantity}</span>
            </Link>
            <div className="logout-container" style={{ display: index === data.length - 1 ? 'flex' : 'none' }}>
              <button className="logout-btn" onClick={() => logout()}><span>logout</span></button>
            </div>
          </div>

        })
      }
    </div>

  </Wrapper >


}

export default UserNavMenu