import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Wrapper from "../../css/Navbar";
import { fixedNavbar, releaseNavbar } from "../../features/userToggleSlice";
import Header from "./Header";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [isFixedNav, setIsFixedNav] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();



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

  return <div>
    <Wrapper >
      <nav ref={navRef} className={`${isFixedNav ? 'fixed-nav' : ''}`}>
        <Header />
        <Navbar />
      </nav>
    </Wrapper>
  </div>
}
export default NavbarContainer