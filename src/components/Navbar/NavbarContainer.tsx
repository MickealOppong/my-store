import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../css/Navbar";
import { fixedNavbar, releaseNavbar } from "../../features/userToggleSlice";
import { useAppSelector } from "../../util/hooks";
import SidebarContainer from "../Sidebar/SidebarContainer";
import Header from "./Header";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [isFixedNav, setIsFixedNav] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const showSidebar = useAppSelector((state) => state.userMenu.showSidebar)


  window.addEventListener('scroll', function () {
    let windowHeight = scrollY;

    const nav = navRef.current;
    if (nav !== null) {
      const navHeight = nav.getBoundingClientRect().height;

      if (navHeight < windowHeight) {
        setIsFixedNav(() => true)
        dispatch(fixedNavbar())
      } else {
        setIsFixedNav(() => false)
        dispatch(releaseNavbar())
      }
    }
  })

  return <Wrapper >

    <nav ref={navRef} className={`${isFixedNav ? 'fixed-nav' : ''}`}>
      <div className="sidebar" style={{ display: showSidebar ? 'flex' : 'none' }}>
        <SidebarContainer />
      </div>
      <Header />
      <Navbar />
    </nav>
  </Wrapper>
}
export default NavbarContainer