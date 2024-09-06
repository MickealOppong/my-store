import Icon from "../general/Icon"
import { SearchInput } from "../Navbar/../../components/index"
import Wrapper from "../Navbar/../../css/Navbar"
import { NavItems } from "../Navbar/../../util/data"


const Navbar = () => {

  return <Wrapper>
    <div className="nav-header">
      <h1>swappi</h1>
      <div className="nav-center">
        {
          NavItems.map((item) => {
            return <div key={item.id} className="list">
              <button className="btn"><Icon icon={item.icon} /></button>
              <span>{item.name}</span>
            </div>
          })
        }
      </div>
    </div>
    <div className="nav-search">
      <SearchInput name="search" placeholder="Czego szukasz?" />
    </div>
  </Wrapper>
}

export default Navbar