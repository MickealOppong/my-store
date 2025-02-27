import { useRef } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Wrapper from "../../css/Navbar"
import { useLazyGetFavQuantityQuery } from "../../features/api/productsApi"
import { updateFavouriteCounter } from "../../features/favouriteSlice"
import { hideNavMenu, showNavMenu } from "../../features/userToggleSlice"
import { useAppSelector } from "../../hooks/hooks"
import { bigNavItems } from "../../util/data"
import Icon from "../general/Icon"
import { SearchInput } from "../index"


const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useAppSelector((state) => state.userSlice.username);
  const userId = useAppSelector((state) => state.userSlice.id);
  const cartQuantity = useAppSelector((state) => state.cart.cartQuantity)
  const [getFAvQuantity] = useLazyGetFavQuantityQuery()


  const handleClick = (selectedItem: string) => {
    if (selectedItem === 'moje swappi') {
      if (!username) {
        navigate('login')
      } else {
        navigate('my-account/orders')
      }
    }

    if (selectedItem === 'ulubione') {
      if (!username) {
        navigate('login')
      } else {
        navigate('my-account/ulubione')
      }

    }
    if (selectedItem === 'moj koszyk') {
      navigate('cart')
    }

  }



  const handleMouseOverEvent = async (selectedItem: string) => {
    if (selectedItem === 'moje swappi') {
      const response = await getFAvQuantity({ userId })
      dispatch(updateFavouriteCounter(response?.data as number))
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
                  <span>{cartQuantity}</span>
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