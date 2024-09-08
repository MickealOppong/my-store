import { useDispatch } from "react-redux"
import Wrapper from "../../css/Navbar"
import { showUserMenu } from "../../features/userMenuSlice"
import { bigNavItems } from "../../util/data"
import Icon from "../general/Icon"
import { SearchInput } from "../index"


const Navbar = () => {
  const dispatch = useDispatch();

  return <Wrapper >
    <div className="nav-header">
      <h1>swappi</h1>
      <div className="search">
        <SearchInput name="search" placeholder="Czego szukasz?" />
      </div>
      <div className="nav-center">
        {
          bigNavItems.map((item) => {
            return <div key={item.id} className="list" onClick={() => dispatch(showUserMenu())}>
              <button className="btn" ><Icon icon={item.icon} /></button>
              <span>{item.name}</span>
            </div>
          })
        }
      </div>
    </div>
  </Wrapper>
}

export default Navbar