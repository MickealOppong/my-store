import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { hideCategoryMenu } from "../../features/userToggleSlice"
import SearchInput from "../general/SearchInput"

const SidebarHeader = () => {
  const dispatch = useDispatch()
  return <Wrapper>
    <div className="title-container">
      <div className="sidebar-title">
        <Link to={'/'} onClick={() => dispatch(hideCategoryMenu())}><span>za</span></Link>
      </div>
      <div className="btn-container">
        <button className="close-btn" onClick={() => dispatch(hideCategoryMenu())}><FaTimes /></button>
      </div>
    </div>
    <div className="search-container">
      <SearchInput name="search" placeholder="Czego szukasz?" width="search-input" />
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: var(---white);

.title-container{
  display: flex;
  justify-content: space-between;
}

.sidebar-title{
  display: flex;
  margin-left:10px;
  font-size: var(---fontSize-2);
  margin-top:5px;
}

.sidebar-title a{
  font-size:var(---fontSize-3);
  color: var(---primary);
}

.btn-container{
  display:flex ;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 2.5rem;
  background-color: var(---primary);
  border-bottom-left-radius:20px;
}

.close-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-color:transparent;
  color: var(---white);
  cursor: pointer;
}

.search-container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:4rem;
  width: 100%;
  height: 6rem;
  background-color: var(---ghost);
}

.search-input{
  height: 3rem;
}
`
export default SidebarHeader