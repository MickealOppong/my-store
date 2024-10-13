import { ChangeEvent, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";

const Pagination = () => {
  const [page, setPage] = useState<number>(1);
  const [pageCount] = useState<number>(300);
  const [inputValue, setInputValue] = useState<number>(1);


  const nextBtn = () => {

    if (page >= pageCount) {
      setPage(() => 1)
      setInputValue(() => 1)
      return
    }
    let newPage = page + 1;
    setPage(() => newPage);
    setInputValue(() => newPage)
  }


  const prevBtn = () => {

    if (page <= 1) {
      setPage(() => pageCount)
      setInputValue(() => pageCount)
      return
    }
    let newPage = page - 1;
    setPage(() => newPage);
    setInputValue(() => newPage)

  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputItem = parseInt(e.target.value);
    setInputValue(() => inputItem)
    setPage(() => inputItem)
  }

  const verifyInput = () => {
    const item = inputValue;
    if (item > pageCount) {
      setInputValue(() => pageCount)
      setPage(() => pageCount)
    } else if (item < 1) {
      setInputValue(() => 1)
      setPage(() => 1)
    }
  }


  return <Wrapper >
    <div className="page-btn-container">
      <button type="submit" className="prev-btn" onClick={() => prevBtn()}><FiChevronLeft className="svg" /></button>
    </div>
    <div className="pages">
      <div className="info-container">
        <span>Page</span>
      </div>
      <input type="number" className="input" value={inputValue.toString()} onChange={handleChange} onKeyDown={() => verifyInput()} style={{ fontWeight: 'bold' }} />
      <div className="info-container" >
        <span>of</span>
        <span >{pageCount}</span>
      </div>
    </div>

    <div className="page-btn-container">
      <button type="submit" className="prev-btn" onClick={() => nextBtn()}><FiChevronRight className="svg" /></button>
    </div>
  </Wrapper>
}


const Wrapper = styled.div`
display: flex;
align-content: center;
justify-content: center;
max-width: var(---maxWidth-1);
margin: 0 auto;
column-gap:2rem;


.pages{
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap:10px;
}



.info-container{
    display: flex;
  align-items: center;
  column-gap:10px;
}

.page-btn-container{
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:var(---shadow-1);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(---white);
  margin-left:10px;
  margin-right:10px;
  outline:none;
  cursor: pointer;
}

.next-btn,
.prev-btn{
  display: flex;
  justify-content: center;
  background-color: transparent;
  border-color:transparent;
  text-transform:uppercase;
  outline:none;
}

.svg{
  font-size:20px;
  color: var(---textColor);
}


.input{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height:1.5rem;
  border:none;
  outline:none;
  text-indent:5px;
  box-shadow:0 5px 5px rgba(0,0,0,0.2);
  border-radius:5px;
  background-color: var(---white);
  text-align:center;
}

.input:focus{
  border: var(---secondary) dashed 1px;
  font-weight:900;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


input[type=number] {
    -moz-appearance:textfield;
    appearance:textfield;
}

`
export default Pagination