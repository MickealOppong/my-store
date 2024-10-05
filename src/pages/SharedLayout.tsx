import { Outlet, useLocation } from "react-router-dom";
import { CartFooter, Footer, NavbarContainer } from "../components/index";
import Wrapper from "../css/ShareLayout";




const SharedLayout = () => {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/cart' || location.pathname === '/cart/checkout') {
    return <Wrapper>
      <section>
        <NavbarContainer />
      </section>
      <section >
        <Outlet />
      </section>
      <CartFooter />
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