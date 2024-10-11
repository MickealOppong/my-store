import { Outlet } from "react-router-dom";
import { UserMenuContainer } from "../components";
import Wrapper from "../css/User";

const User = () => {


  return <Wrapper >
    <div className="parent">
      <div className="side-menu">
        <UserMenuContainer />
      </div>
      <section className="outlet">
        <Outlet />
      </section>
    </div>
  </Wrapper>
}
export default User;