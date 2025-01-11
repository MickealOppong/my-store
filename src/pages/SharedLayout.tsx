import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { CartFooter, Footer, Loading, NavbarContainer, SidebarContainer } from "../components/index";
import Wrapper from "../css/ShareLayout";
import { useAppSelector } from "../hooks/hooks";



const SharedLayout = () => {
  const showSidebar = useAppSelector((state) => state.userMenu.showSidebar)
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';





  if (location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/cart' || location.pathname === '/cart/checkout') {
    return <Wrapper >
      <section>
        <NavbarContainer />
      </section>
      <div className="sidebar" style={{ display: showSidebar ? 'flex' : 'none' }}>
        <SidebarContainer />
      </div>
      <section className={`outlet ${showSidebar ? 'hide-outlet' : ''}`}  >
        {
          isLoading ? <Loading /> : <Outlet />
        }
      </section>
      <CartFooter />
    </Wrapper>
  }
  return <Wrapper >
    <section>
      <NavbarContainer />
    </section>
    <div className="sidebar" style={{ display: showSidebar ? 'flex' : 'none' }}>
      <SidebarContainer />
    </div>
    <section className={`outlet ${showSidebar ? 'hide-outlet' : ''}`} >
      {
        isLoading ? <Loading /> : <Outlet />
      }
    </section>
    <section>
      <Footer />
    </section>
    <section className="ad-container">
      <h2>za</h2>
    </section>
  </Wrapper>

}

export default SharedLayout