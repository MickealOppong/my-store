import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Wrapper from "../../css/Navbar"
import { hideUserMenu, showUserMenu } from "../../features/userMenuSlice"
import { bigNavItems } from "../../util/data"
import { useAppSelector } from "../../util/hooks"
import Icon from "../general/Icon"
import { SearchInput } from "../index"


const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isActive } = useAppSelector((state) => state.userSlice);



  const handleClick = (selectedItem: string) => {
    if (selectedItem === 'moje swappi') {
      if (!isActive) {
        navigate('login')
      } else {
        navigate('orders')
      }
    }

    if (selectedItem === 'ulubione') {
      if (!isActive) {
        navigate('login')
      } else {
        navigate('ulubione')
      }

    }
    if (selectedItem === 'moj koszyk') {
      if (!isActive) {
        navigate('login')
      } else {
        navigate('cart')
      }
    }

  }



  const handleMouseOverEvent = (selectedItem: string) => {
    if (selectedItem === 'moje swappi') {
      dispatch(showUserMenu())
    } else {
      dispatch(hideUserMenu())
    }
    if (selectedItem === 'moj koszyk') {
    }
  }


  return <Wrapper >
    <div className="nav-header">
      <Link to={''} className="logo">swappi</Link>
      <div className="search">
        <SearchInput name="search" placeholder="Czego szukasz?" />
      </div>
      <div className="nav-center" >
        {
          bigNavItems.map((item) => {
            return <div key={item.id} className="list" onClick={() => handleClick(item.name)} onMouseOver={() => handleMouseOverEvent(item.name)} >
              <button className="btn" ><Icon icon={item.icon} /></button>
              <span>{item.name}</span>
            </div>
          })
        }
      </div>
    </div>
  </Wrapper>
}

export default Navbar