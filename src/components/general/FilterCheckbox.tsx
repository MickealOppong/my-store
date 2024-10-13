import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";

const FilterCheckbox = ({ title, data }: { title: string, data: string[] }) => {

  const [showFilterItem, setShowFilterItem] = useState<boolean>(false);


  return <Wrapper>
    <div className="filter">
      <div className="title">
        <h2>{title}</h2>
        {
          showFilterItem ? <button className="up-btn" onClick={() => setShowFilterItem(() => false)}><FiChevronUp /></button> : <button className="down-btn" onClick={() => setShowFilterItem(() => true)}><FiChevronDown /></button>
        }
      </div>
      <div className="main-container" style={{ height: showFilterItem ? 'auto' : '0', overflow: showFilterItem ? 'visible' : 'hidden', transition: '1s' }}>
        {
          data.map((item, index) => {
            return <div className="input-container" key={index}>
              <input type="checkbox" placeholder='from' className="input" />
              <span>{item}</span>
            </div>
          })
        }
      </div>

    </div>
  </Wrapper>

}
const Wrapper = styled.div`

.title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title h2{
  font-size:0.9rem;
  font-weight:500;
}

.input-container{
  display: flex;
  align-items: center;

}
.input-container span{
}


.input{
  width: 2rem;
  height: 1.5rem;
  border: none;
  outline:none;
  text-indent:5px;
  margin-left:-5px;
}

input[type="checkbox"]{
  accent-color: var(---secondary);
}
.down-btn,
.up-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-color:transparent;
  color: var(---textColor-3);
  font-size:1.4rem;
  cursor: pointer;
}

`
export default FilterCheckbox