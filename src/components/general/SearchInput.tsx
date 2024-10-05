import { FiSearch } from "react-icons/fi"
import styled from "styled-components"


const SearchInput = ({ name, placeholder, width }: { name: string, placeholder: string, width: string }) => {
  return <Wrapper>
    <form className={`search-form ${width}`}>
      <input type="search" name={name} id={name} placeholder={placeholder} className={`input-control ${width}`} />
      <button className="search-btn"><FiSearch /></button>
    </form>
  </Wrapper>
}
const Wrapper = styled.div` 

.search{
  display: flex;
  width: 50%;
}

.search-form{
  display: flex;
  align-items: center;
  max-width: var(---maxWidth-2);
  margin: 0 auto;
  width: 100%;
 box-shadow:0 2px 2px rgba(0,0,0,0.2);
  border:var(---textColor-2) groove 0.1px;
 
}

.search-form input{
  width: 90vw;
  height: 2.2rem;
  text-indent: 10px;
border:none;
 outline: none;

}

.search-form input::placeholder{
 color: var(---textColor-2);
 letter-spacing: var(---spacing-0);  
 font-size:var(---fontSize-0);
}

.search-btn{
  width: 3rem;
  height: 2.2rem;
  background-color: var(---secondary);
  border-color:transparent;
  color: var(---textColor-4);
  border-radius:10%;
  margin-left:-0.25rem;
}

`
export default SearchInput