import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import styled from "styled-components"

const SelectInput = ({ name }: { name: string }) => {
  const [value, setValue] = useState<string>('me')
  const [showList, setShowList] = useState<boolean>(false);

  function handleClick(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    if (e.target instanceof HTMLElement) {
      const text: string = e.target.textContent ? e.target.textContent : '';
      setValue(() => text);
    }
  }
  return <Wrapper>
    <select name={name} id={name} hidden>
      <option value={value}>{value}</option>
    </select>
    <div className="select">
      <div className="select-container">
        <span>{value}</span>
        <button type="button" onClick={() => setShowList(() => !showList)}>{showList ? <FaChevronUp /> : <FaChevronDown />}</button>
      </div>
      <div className={`list-container ${showList ? 'show-list' : ''}`}>
        <ul className="lists" onClick={(e: React.MouseEvent<HTMLUListElement, MouseEvent>) => handleClick(e)}>
          <li className="list">ME</li>
          <li className="list">You</li>
          <li className="list">Us</li>
        </ul>
      </div>
    </div>


  </Wrapper>
}
const Wrapper = styled.div`

.select{
  display: flex;
  flex-direction: column;
}

ul{
list-style: none;
}
.list-container{

  display: none;
  z-index: 10;
}

.lists{
  display: flex;
  flex-direction: column;
   background-color: rebeccapurple;
}
.list{
  cursor: pointer;
}
  
  .show-list{
    display: flex;
  }
`
export default SelectInput