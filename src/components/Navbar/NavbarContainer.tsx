import { useRef, useState } from "react";
import Wrapper from "../../css/Navbar";
import Header from "./Header";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [isFixedNav, setIsFixedNav] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  window.addEventListener('scroll', function () {
    let windowHeight = scrollY;

    const nav = navRef.current;
    if (nav !== null) {
      const navHeight = nav.getBoundingClientRect().height;

      if (navHeight < windowHeight) {
        setIsFixedNav(() => true)
      } else {
        setIsFixedNav(() => false)
      }
    }
  })

  return <Wrapper >
    <nav ref={navRef} className={`${isFixedNav ? 'fixed-nav' : ''}`}>
      <Header />
      <Navbar />
    </nav>
  </Wrapper>
}
export default NavbarContainer