import { userMenu } from "../../util/data"
import Wrapper from "../Navbar/../../css/Navbar"
import { BigNavbar, SmallNavbar, UserMenu } from "../Navbar/../index"


const Navbar = () => {

  return <Wrapper>
    <div className="small-nav">
      <SmallNavbar />
    </div>
    <div className="big-nav">
      <BigNavbar />
      <UserMenu data={userMenu} />
    </div>
  </Wrapper>
}

export default Navbar