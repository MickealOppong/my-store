import { ChangeEvent } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import styled from "styled-components";

const FormInputNumberCart = ({ handleClickPlusButton, handleClickMinusButton, handleInputValueChange, inputValue, handleFocusEvent, width }: { width: string, handleClickPlusButton: () => void, handleClickMinusButton: () => void, handleInputValueChange: (e: ChangeEvent<HTMLInputElement>) => void, handleFocusEvent: (e: React.FocusEvent<HTMLInputElement, Element>) => void, inputValue: string }) => {



  return <Wrapper >
    <div className={`input-control`}>
      <input type='number' name='quantity' className={`input ${width}`} onChange={handleInputValueChange} onBlur={(e) => handleFocusEvent(e)} value={inputValue} />
      <button type="submit" className="minus-btn" onClick={() => handleClickMinusButton()} style={{ display: inputValue === 'NaN' || inputValue <= '1' ? 'none' : 'flex' }}><FiMinus /></button>
      <button type="submit" className="plus-btn" onClick={() => handleClickPlusButton()}><FiPlus /></button>
    </div>

  </Wrapper>
}

const Wrapper = styled.div`

display: flex;


  .input-control{
  position: relative;
  display: flex;
  flex-direction: column;
  height: 3rem;
  border: rgba(0,0,0,0.2) solid 1px;
  
  }

  .label{
    font-size:0.85rem;
    text-indent:10px;
    color: var(---textColor);
    background-color: var(---white);
    padding-top:5px;

  }

  .input{
    height: 3rem;
    outline: none;
    text-indent:50px;
    border-style:none;
    text-transform:uppercase;
    background-color: var(---white);
  }

  .input-control:hover .label{
    color: var(---primary);
  }

  .input-control:hover{
    border-color: var(---primary);
  }

  .plus-btn,
  .minus-btn{
    position: absolute;
    top: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius:50%;
    border-color:transparent;
    background-color: var(---white);
    border:var(---textColor) solid 0.5px;

  }

  .minus-btn{
    left: -10%;
  }

  .plus-btn{
    right: -10%;
  }
  
  @media screen and  (min-width: 1092px){
 
  }
`
export default FormInputNumberCart