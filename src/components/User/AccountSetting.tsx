import { Store } from "@reduxjs/toolkit";
import Wrapper from "../../css/userSettings";
import { UserSetting } from "../index";


export const loader = (store: Store) => async () => {
  return null;


}
const AccountSetting = () => {


  return <Wrapper>
    <div className="setting-title">
      <h2>Account settings</h2>
    </div>
    <div className="account-info">
      <UserSetting />
    </div>
  </Wrapper>

}

export default AccountSetting