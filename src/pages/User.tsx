import { Outlet, useNavigation } from "react-router-dom";
import { Loading, UserMenuContainer } from "../components";
import Wrapper from "../css/User";

const User = () => {
  const navigation = useNavigation()

  const isLoading = navigation.state === 'loading'
  return <Wrapper >
    <div className="parent">
      <div className="side-menu">
        <UserMenuContainer />
      </div>
      <section className="outlet">
        {isLoading ? <Loading /> : <Outlet />}
      </section>
    </div>
  </Wrapper>
}
export default User;