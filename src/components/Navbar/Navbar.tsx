import { userMenu } from "../../util/data"
import Wrapper from "../Navbar/../../css/Navbar"
import { BigNavbar, SmallNavbar } from "../Navbar/../index"
import UserMenuContainer from "../User/UserNavMenuContainer"


const Navbar = () => {

  return <Wrapper>
    <div className="small-nav">
      <SmallNavbar />
    </div>
    <div className="big-nav">
      <BigNavbar />
      <UserMenuContainer data={userMenu} />
    </div>
  </Wrapper>
}

export default Navbar