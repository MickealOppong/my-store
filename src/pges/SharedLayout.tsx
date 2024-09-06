import { Outlet } from "react-router-dom"
import { Footer, NavbarContainer } from "../components/index"
import Wrapper from "../css/ShareLayout"




const SharedLayout = () => {
  return <Wrapper>
    <section>
      <NavbarContainer />
    </section>
    <section>
      <Outlet />
    </section>
    <section>
      <Footer />
    </section>
  </Wrapper>
}

export default SharedLayout