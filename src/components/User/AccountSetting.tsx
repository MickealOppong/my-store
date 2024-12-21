import { Store } from "@reduxjs/toolkit";
import Wrapper from "../../css/userSettings";
import { useAppSelector } from "../../hooks/hooks";
import { UserSetting } from "../index";


export const loader = (store: Store) => async () => {


}
const AccountSetting = () => {
  const userData = useAppSelector((state) => state.userSlice);
  return <Wrapper>
    <div className="setting-title">
      <h2>Account settings</h2>
    </div>
    <div className="account-info">
      <UserSetting {...userData} />
    </div>
  </Wrapper>

}

export default AccountSetting