import { ChangeEvent, useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Form } from "react-router-dom";
import styled from "styled-components";

const Pagination = () => {
  const [page, setPage] = useState<number>(1);
  const [inputValue, setInputValue] = useState<string>('1');


  const handleClickPlusButton = () => {
    let newPage = page + 1;
    setPage(() => newPage)
    setInputValue(() => newPage.toString())

  }


  const handleClickMinusButton = () => {
    let newPage = page - 1;
    setPage(() => newPage)
    setInputValue(() => newPage.toString())
  }


  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(e.target.value);
    setPage(() => newValue)
    setInputValue(() => newValue.toString());
  }



  useEffect(() => {
    let newValue = page;
    setInputValue(() => newValue + "");
  }, [page])



  return <Wrapper >
    <Form className={`input-control`} >
      <input type='number' name="page" className={`input`} value={inputValue} onChange={handleInputValueChange} />
      <button type="submit" className="minus-btn" onClick={() => handleClickMinusButton()} style={{ display: inputValue === 'NaN' || inputValue <= '1' ? 'none' : 'flex' }}><FiMinus /></button>
      <button type="submit" className="plus-btn" onClick={() => handleClickPlusButton()}><FiPlus /></button>
    </Form>

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
    width: 6rem;
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
    cursor: pointer;
  }

  .minus-btn{
    left: -15%;
  }

  .plus-btn{
    right: -15%;
  }
  
  @media screen and  (min-width: 1092px){
 
  }
`
export default Pagination