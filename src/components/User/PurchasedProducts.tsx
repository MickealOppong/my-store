import { useState } from "react";
import styled from "styled-components";

const btnData: string[] = ['All', 'unpaid', 'New', 'In-progress', 'For pick-up', 'Returned', 'Canceled']
const PurchasedProducts = () => {
  const [active, setActive] = useState<number>(0);

  const handleClick = (inputValue: number) => {
    setActive(() => inputValue)
  }
  return <Wrapper>
    <div className="title">
      <h2>Purchased products</h2>
    </div>
    <div className="btn-parent">
      {
        btnData.map((item, index) => {
          return <div className={`btn-div ${index === active ? 'active-color' : ''}`} key={item} onClick={() => handleClick(index)}>
            <button className="btn-title"><span>{item}</span></button>
            <div className={`underline`}></div>
          </div>
        })
      }
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top:-1rem;
  width: 100vw;
 
  .title h2{
    font-weight:500;
  }

.btn-parent{
  display: flex;
  align-items: center;
  width: 100%;
  column-gap:5px;
  background-color: var(---white);
  overflow-x:scroll;

}

.btn-div{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3rem;
  color: var(---textColor);
  transition:all .1s ease-in-out;
}


.btn-div:hover  .btn-title{
    color: var(---primary);
}

.btn-div:hover .underline{
   width: 100%;
  height: 2px;
  background-color: var(---primary);
}



.active-color .underline{
  width: 100%;
  height: 2px;
  background-color: var(---primary);
}

.active-color .btn-title{
    color: var(---primary);
}

.btn-title{
  display: flex;
  align-items: center;
  background-color: transparent;
  border-color:transparent;
  width: 6rem;
  height:2.8rem;
}

@media screen and (min-width: 768px) {
  width: 60rem;

  .btn-parent{
  display: flex;
  align-items: center;
  width: 100%;
}


}

@media screen and (min-width: 1092px) {
  width: 70vw;
  .btn-parent{
  overflow-x:hidden;
}
  .btn-parent{
  display: flex;
  align-items: center;
  width: 100%;
}


}
`
export default PurchasedProducts