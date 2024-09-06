import Wrapper from "../Navbar/../../css/Navbar"
import { BigNavbar, SmallNavbar } from "../Navbar/../index"


const Navbar = () => {

  return <Wrapper>
    <div className="small-nav">
      <SmallNavbar />
    </div>
    <div className="big-nav">
      <BigNavbar />
    </div>
  </Wrapper>
}

export default Navbar