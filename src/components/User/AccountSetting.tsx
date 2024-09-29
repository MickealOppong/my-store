import { nanoid } from "nanoid"
import { UserProfile } from ".."
import Wrapper from "../../css/userSettings"
import { UserInfo } from "./UserProfile"


export const userData: UserInfo = {
  id: nanoid(),
  name: 'Mike Epps',
  email: 'epps@mail.com',
  password: '',
  telephone: '900-900-900',
  deliveryAddress:
  {
    id: nanoid(),
    street: 'Manngo 2',
    city: 'Lapaz',
    zipCode: '01-100'
  }
  ,
  invoiceAddress:
  {
    id: nanoid(),
    street: 'Manngo 2',
    city: 'Lapaz',
    zipCode: '01-100'
  }

}
const AccountSetting = () => {
  return <Wrapper>
    <div className="setting-title">
      <h2>Account settings</h2>
    </div>
    <div className="account-info">
      <UserProfile data={userData} />
    </div>
  </Wrapper>

}

export default AccountSetting