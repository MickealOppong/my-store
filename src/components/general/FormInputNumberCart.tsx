import { ChangeEvent, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUpdateCart } from "../../hooks/useUpdateCart";

const FormInputNumberCart = ({ id, productId, name, width, cartQuantity }: { id: number, productId: number, name: string, width: string, cartQuantity: number }) => {
  const [quantity, setQuantity] = useState<number>(cartQuantity);
  const [inputValue, setInputValue] = useState<string>('1');
  const { updateCart } = useUpdateCart()
  const navigate = useNavigate();
  console.log(id, productId, quantity);

  const handleClickPlusButton = () => {
    let newQuantity = quantity + 1;
    updateCart(id, productId, newQuantity)
    setQuantity(() => newQuantity)
    navigate('/cart')
  }


  const handleClickMinusButton = () => {
    let newQuantity = quantity - 1;
    updateCart(id, productId, newQuantity)
    setQuantity(() => newQuantity)
    navigate('/cart')
  }

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {

    let newValue = parseInt(e.target.value);
    setQuantity(() => newValue);
    setInputValue(() => newValue.toString());
  }

  useEffect(() => {
    let newValue = quantity;
    setInputValue(() => newValue + "");
  }, [quantity])


  return <Wrapper >
    <div className={`input-control`}>
      <input type='number' name={name} className={`input ${width}`} value={inputValue} onChange={handleInputValueChange} />
      <button type="button" className="minus-btn" onClick={() => handleClickMinusButton()} style={{ display: inputValue === 'NaN' || inputValue <= '1' ? 'none' : 'flex' }}><FiMinus /></button>
      <button type="button" className="plus-btn" onClick={() => handleClickPlusButton()}><FiPlus /></button>
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