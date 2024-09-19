import { userMenu } from "../../util/data"
import UserMenu from "./UserMenu"

const UserMenuContainer = () => {
  return <div >
    <UserMenu data={userMenu} />
  </div>

}

export default UserMenuContainer