import Wrapper from "../../css/UserNavMenu"
import { UserMenuType } from "../../types/general"
import UserNavMenu from "./UserNavMenu"

const UserNavMenuContainer = ({ data }: { data: UserMenuType[] }) => {


  return <Wrapper >
    <UserNavMenu data={data} />
  </Wrapper>


}

export default UserNavMenuContainer