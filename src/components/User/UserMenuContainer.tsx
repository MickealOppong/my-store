import Wrapper from "../../css/UserMenu"
import { UserMenuType } from "../../types/general"
import UserMenu from "./UserMenu"

const UserMenuContainer = ({ data }: { data: UserMenuType[] }) => {


  return <Wrapper >
    <UserMenu data={data} />
  </Wrapper>


}

export default UserMenuContainer