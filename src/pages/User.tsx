import { Outlet } from "react-router-dom";
import { UserMenuContainer } from "../components";
import Wrapper from "../css/User";

const User = () => {


  return <Wrapper >
    <div className="side-menu">
      <UserMenuContainer />
    </div>
    <section className="outlet">
      <Outlet />
    </section>
  </Wrapper>
}
export default User;