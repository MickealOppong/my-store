import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import styled from "styled-components";

const FormInputNumber = ({ type, name, width }: { type: string, name: string, width: string }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [inputValue, setInputValue] = useState<number>(1);


  const handleClickPlusButton = () => {
    let newQuantity = quantity + 1;
    setQuantity(() => newQuantity)
  }


  const handleClickMinusButton = () => {
    let newQuantity = quantity - 1;
    setQuantity(() => newQuantity)
  }

  const handleInputValueChange = () => {

    let newValue = quantity;
    setInputValue(() => newValue);
  }

  useEffect(() => {
    handleInputValueChange()
  }, [quantity])

  return <Wrapper >
    <div className={`input-control   `}>
      <input type={type} name={name} className={`input ${width}`} value={inputValue} onChange={() => handleInputValueChange()} />
      <button className="minus-btn" onClick={() => handleClickMinusButton()} style={{ display: quantity <= 1 ? 'none' : 'flex' }}><FiMinus /></button>
      <button className="plus-btn" onClick={() => handleClickPlusButton()}><FiPlus /></button>
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
    color: var(---textColor-3);
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
    color: var(---secondary);
  }

  .input-control:hover{
    border-color: var(---secondary);
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
    border:var(---textColor-3) solid 0.5px;

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
export default FormInputNumber