import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styled from "styled-components";

const ComplexPagination = () => {
  const [page, setPage] = useState<number>(1);
  const [pageCount] = useState<number>(23);
  const [breakPoint] = useState<number>(5);

  console.log('page', page, 'bp', breakPoint);


  const renderButtons = (): JSX.Element[] => {
    let btnArray: JSX.Element[] = [];
    //first
    btnArray.push(activeButton({ pageNumber: 1, active: page === 1 }))

    //dots...
    if (page > 1) {
      btnArray.push(<button className="btn">...</button>)
    }

    if (page !== 1 && page !== pageCount) {
      btnArray.push(activeButton({ pageNumber: page, active: true }))
    }
    //dots...
    if (page !== pageCount - 1) {
      btnArray.push(<button className="btn">...</button>)
    }
    //last
    btnArray.push(activeButton({ pageNumber: pageCount, active: page === pageCount }))

    return btnArray;
  }


  const activeButton = ({ pageNumber, active }: { pageNumber: number, active: boolean }) => {
    return <button className={`btn ${active ? 'active-page' : ''}`} onClick={() => handleChange(pageNumber)}>{pageNumber}</button>
  }


  const handleChange = (pageNumber: number) => {
    let newPage = pageNumber;
    setPage(() => newPage)

  }

  return <Wrapper >
    <div className="btn-container">
      <button onClick={() => {
        let currentPage = page - 1;
        if (currentPage < 1) {
          currentPage = pageCount;
          setPage(() => currentPage)
        }

        handleChange(currentPage)
      }} className="prev-btn" ><FiChevronLeft /></button>
    </div>
    <div className="pages">
      {
        renderButtons().map((item, index) => {
          return <div key={index} className="btn-page">
            {item}
          </div>
        })
      }
    </div>
    <div className="btn-container">
      <button onClick={() => {

        let currentPage = page + 1;
        if (currentPage > pageCount) {
          currentPage = 1;
          setPage(() => currentPage)
        }

        handleChange(currentPage)
      }} className="next-btn"><FiChevronRight /></button>
    </div>

  </Wrapper>
}


const Wrapper = styled.div`
display: flex;
align-content: center;
justify-content: center;
max-width: var(---maxWidth-1);
margin: 0 auto;
width: 100%;
column-gap:5px;

.pages{
  display: flex;
align-content: center;
column-gap:2px;
}

.btn-page{
  display: flex;
align-content: center;
}

.btn{
  font-size:0.9rem;
  background-color: transparent;
  border-color:transparent;
  cursor: pointer;
}



.info-container{
    display: flex;
  align-items: center;
  column-gap:10px;
  margin-left:1rem;
}

.btn-container{
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:0 2px 5px rgba(0,0,0,0.5);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: var(---white);
  margin-left:10px;
  margin-right:10px;
  cursor: pointer;
}

.next-btn,
.prev-btn{
  display: flex;
  align-items: center;
  background-color: transparent;
  border-color:transparent;
  text-transform:uppercase;
  width: 10rem;
    font-size:0.9rem;
    cursor: pointer;
 
}

.next-btn svg,
.prev-btn svg{
    font-size:1.5rem;
}

.next-btn span,
.prev-btn span{
   color: var(---primary);
}
.active-page{
  color:var(---secondary);
  font-weight:900;
}

.pageCount{
  font-size:1.2rem;
}
`
export default ComplexPagination