import { Link } from "react-router-dom"
import Wrapper from "../../css/UserMenu"
import { UserMenuType } from "../../types/general"
import { useAppSelector } from "../../util/hooks"
import Icon from "./Icon"

const UserMenu = ({ data }: { data: UserMenuType[] }) => {

  const { showMenu } = useAppSelector((state) => state.userMenu)
  console.log(showMenu);

  return <Wrapper style={{ display: showMenu ? 'flex' : 'none' }}>
    <div className="link-title">
      <h5>Witaj w swappi.com</h5>
    </div>
    <div className="link-container">
      {
        data.map((menu) => {
          return <Link to={`${menu.url}`} key={menu.id} className="menu-link">
            <Icon icon={menu.icon} />
            <span>{menu.text}</span>
          </Link>
        })
      }
    </div>

  </Wrapper>

}

export default UserMenu