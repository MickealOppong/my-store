import Wrapper from "../../css/userSettings";
import { useAppSelector } from "../../util/hooks";
import { UserSetting } from "../index";




const AccountSetting = () => {
  const { firstName, lastName, username, number } = useAppSelector((state) => state.userSlice);
  return <Wrapper>
    <div className="setting-title">
      <h2>Account settings</h2>
    </div>
    <div className="account-info">
      <UserSetting firstName={firstName} lastName={lastName} username={username} number={number} />
    </div>
  </Wrapper>

}

export default AccountSetting