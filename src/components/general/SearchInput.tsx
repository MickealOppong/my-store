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
  border:var(---border) groove 0.1px;
}

.search-form{
  display: flex;
  align-items: center;
  max-width: var(---maxWidth-2);
  margin: 0 auto;
  width: 100%;
  background-color: var(---white);
  border-radius:5px;
}



.search-btn{
  width: 3rem;
  height: 2.2rem;
  background-color: var(---primary);
  border-color:transparent;
  color: var(---white);
  border-radius:10%;
  margin-left:-0.25rem;
  cursor: pointer;
}


.input-control{
   width: 90vw;
  height: 2.2rem;
  text-indent: 10px;
  border:var(---border) solid 0.1px;
  outline: none;
  background-color: var(---white);
  border-radius:5px;
}

.input-control::placeholder{
 color: var(---textColor);
 letter-spacing: var(---spacing-0);  
}


`
export default SearchInput