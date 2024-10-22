import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { hideNavMenu, showCategoryMenu, showNavMenu } from "../../features/userToggleSlice"
import { useAppSelector } from "../../hooks/hooks"
import Icon from "../general/Icon"
import { SearchInput } from "../Navbar/../../components/index"
import Wrapper from "../Navbar/../../css/Navbar"
import { NavItems } from "../Navbar/../../util/data"


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isActive } = useAppSelector((state) => state.userSlice);


  const handleClick = (selectedItem: string) => {
    if (selectedItem === 'swappi') {
      if (!isActive) {
        navigate('login')
      } else {
        navigate('my-account')
      }
    }
    if (selectedItem === 'kategorie') {
      dispatch(showCategoryMenu())
    }

    if (selectedItem === 'ulubione') {
      if (!isActive) {
        navigate('login')
      } else {
        navigate('my-account/ulubione')
      }

    }
    if (selectedItem === 'koszyk') {
      if (!isActive) {
        navigate('login')
      } else {
        navigate('cart')
      }
    }

  }

  const handleMouseOverEvent = (selectedItem: string) => {
    if (selectedItem === 'moje swappi') {
      dispatch(showNavMenu());
    } else {
      dispatch(hideNavMenu())
    }
    if (selectedItem === 'koszyk') {
    }
  }
  return <Wrapper>
    <div className="nav-header">
      <Link to={''} className="logo"><h1>za</h1></Link>
      <div className="nav-center">
        {
          NavItems.map((item) => {
            return <div key={item.id} className="list" onClick={() => handleClick(item.name)} onMouseOver={() => handleMouseOverEvent(item.name)}>
              <div className="name-container">
                <button className="btn" ><Icon icon={item.icon} /></button>
                <div className="sm-cart-counter" style={{ display: item.name === 'koszyk' ? 'flex' : 'none' }}>
                  <span>6</span>
                </div>
              </div>
              <span>{item.name}</span>
            </div>
          })
        }
      </div>
    </div>
    <div className="nav-search">
      <SearchInput name="search" placeholder="Czego szukasz?" width="search-input" />
    </div>
  </Wrapper>
}

export default Navbar