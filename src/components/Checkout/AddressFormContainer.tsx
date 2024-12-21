import { useState } from "react";
import styled from "styled-components";


const list = ['Business', 'Person']
const AddressFormContainer = () => {
  const [current, setCurrent] = useState<number>(0);


  const handleClick = (input: number) => {

    setCurrent(() => input);
  }


  return <Wrapper>
    <div className="parent-container">
      {
        list.map((item, index) => {
          return <button className={`form-btn-container ${current === index ? 'active' : ''}`} key={item} onClick={() => handleClick(index)}>
            <div className="checkbox-container">
              <div className="checkbox"></div>
            </div>
            <span>{item}</span>
          </button>
        })
      }
    </div>
    <div style={{ display: current === 1 ? 'flex' : 'none' }}>

    </div>
    <div style={{ display: current === 0 ? 'flex' : 'none' }}>

    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  
  .parent-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15rem;

  }

  .form-btn-container{
    display: flex;
    column-gap:5px;
    background-color: transparent;
    border-color:transparent;
    cursor: pointer;
  }

  .checkbox-container{
  display: flex;
  justify-content:center;
  align-items: center;
  width: 10px;
  height: 10px;
  border:var(---secondary) solid 2px;
  border-radius:50%;
}

.checkbox{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6px;
  height: 6px;
  background-color: var(---white);
  border-radius:50%;
}

.active .checkbox{
  background-color: var(---secondary);
}

`
export default AddressFormContainer