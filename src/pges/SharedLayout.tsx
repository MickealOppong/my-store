import { Outlet, useLocation } from "react-router-dom";
import { Footer, NavbarContainer } from "../components/index";
import Wrapper from "../css/ShareLayout";




const SharedLayout = () => {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') {
    return <Wrapper>
      <section>
        <NavbarContainer />
      </section>
      <section >
        <Outlet />
      </section>
    </Wrapper>
  }
  return <Wrapper>
    <section>
      <NavbarContainer />
    </section>
    <section >
      <Outlet />
    </section>
    <section>
      <Footer />
    </section>
  </Wrapper>
}

export default SharedLayout