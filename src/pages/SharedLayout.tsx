import { Outlet, useLocation } from "react-router-dom";
import { CartFooter, Footer, NavbarContainer, SidebarContainer } from "../components/index";
import Wrapper from "../css/ShareLayout";
import { useAppSelector } from "../util/hooks";



const SharedLayout = () => {
  const showSidebar = useAppSelector((state) => state.userMenu.showSidebar)
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/cart' || location.pathname === '/cart/checkout') {
    return <Wrapper>
      <section>
        <NavbarContainer />
        <div className="sidebar" style={{ display: showSidebar ? 'flex' : 'none' }}>
          <SidebarContainer />
        </div>
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
      <div className="sidebar" style={{ display: showSidebar ? 'flex' : 'none' }}>
        <SidebarContainer />
      </div>
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