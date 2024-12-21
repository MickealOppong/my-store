import Wrapper from "../../css/SmallMenu"
import { userMenu } from "../../util/data"
import SmallUserMenu from "./SmallUserMenu"

const SmallUserMenuContainer = () => {


  return <Wrapper>
    <SmallUserMenu data={userMenu} />
  </Wrapper>
}

export default SmallUserMenuContainer