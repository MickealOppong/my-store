import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Wrapper from "../../css/Navbar"
import { hideNavMenu, showNavMenu } from "../../features/userToggleSlice"
import { useAppSelector } from "../../hooks/hooks"
import { useFetchCartQuantity } from "../../hooks/useFetchCartQuantity"
import { bigNavItems } from "../../util/data"
import Icon from "../general/Icon"
import { SearchInput } from "../index"


const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isActive } = useAppSelector((state) => state.userSlice);

  //compute  number of items in  cart
  const { quantity } = useFetchCartQuantity();


  const handleClick = (selectedItem: string) => {
    if (selectedItem === 'moje swappi') {
      if (!isActive) {
        navigate('login')
      } else {
        navigate('my-account/orders')
      }
    }

    if (selectedItem === 'ulubione') {
      if (!isActive) {
        navigate('login')
      } else {
        navigate('my-account/ulubione')
      }

    }
    if (selectedItem === 'moj koszyk') {
      navigate('cart')
    }

  }



  const handleMouseOverEvent = (selectedItem: string) => {
    if (selectedItem === 'moje swappi') {
      dispatch(showNavMenu());
    } else {
      dispatch(hideNavMenu())
    }
    if (selectedItem === 'moj koszyk') {
    }
  }


  window.addEventListener('mouseover', function (e: MouseEvent) {
    const navContainer = navRef.current;

    if (navContainer !== null) {
      const dim = navContainer.getBoundingClientRect();

      let top = dim.top;

      if ((e.clientY < top)) {
        dispatch(hideNavMenu());
      }
    }
  });


  return <Wrapper ref={navRef}>
    <div className="nav-header">
      <Link to={''} className="logo"><h1>za</h1></Link>
      <div className="search">
        <SearchInput name="search" placeholder="Czego szukasz?" width="search-input" />
      </div>
      <div className="nav-center" >
        {
          bigNavItems.map((item) => {
            return <div key={item.id} className="list" onClick={() => handleClick(item.name)} onMouseOver={() => handleMouseOverEvent(item.name)} >
              <div className="name-container">
                <button className="btn" ><Icon icon={item.icon} /></button>
                <div className="cart-counter" style={{ display: item.name === 'moj koszyk' ? 'flex' : 'none' }}>
                  <span>{quantity}</span>
                </div>
              </div>
              <span>{item.name}</span>
            </div>
          })
        }
      </div>
    </div>
  </Wrapper>
}

export default Navbar