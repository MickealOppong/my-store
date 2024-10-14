import { useEffect, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Timeline } from "../../types/general";


const CartTimeline = ({ data }: { data: Timeline[] }) => {
  const [array, setArray] = useState<number[]>(Array.from([0, 0, 0]));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const location = useLocation();



  useEffect(() => {
    if (location.pathname === '/cart/summary') {
      const d = [1, 1, 1];
      setArray(() => d)
      setCurrentIndex(() => 2)
      return;
    } else if (location.pathname === '/cart/checkout') {
      const d = [1, 1, 0];
      setArray(() => d)
      setCurrentIndex(() => 1)
      return;
    } else {
      const d = [1, 0, 0]
      setArray(() => d)
      setCurrentIndex(() => 0)
      return;
    }
  }, [location.pathname])



  return <Wrapper className="timeline">
    {
      data.map((item, index) => {
        return <Link to={item.url} key={item.id} className={`link ${array[index] === 1 ? 'active' : ''} `}>
          <span className={`text ${currentIndex === index ? 'active-text' : ''} `}>{item.text}</span>
          <div className={`underline ${array[index] === 1 ? 'active-underline' : ''} `}></div>
        </Link>
      })
    }
    <div className="timeline-counter">
      <Link to={''}><FiChevronLeft /></Link>
      <span>1 / 3</span>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  
  display: flex;
  align-items: center;
  column-gap:5px;
  width: 100%;
  height: 3em;


    .link{
    display:flex;
    flex-direction: column;
    width: 100%;
    font-size:0.65rem;
    color: var(---textColor);
    cursor: pointer;

  }

  .link:nth-child(3){
    color: var(---textColor);
   pointer-events:none;
  }

  .timeline-counter{
    display: none;
    align-items: center;
    column-gap:10px;
    width: 20rem;
    background-color: darkcyan;
  }

  .text{
    height: 1.5rem;
  }

.underline{
  display: flex;
  align-items: center;
  width:100%;
  height: 5px;
  background-color:lightskyblue;
}



.active-underline{
  background-color: var(---secondary);
}

.active-text{
  font-size:.75rem;
  border-bottom-color:var(---primary);
  color: var(---secondary);
}

@media screen and (min-width: 768px) {

      .link{
    font-size:0.85rem;
  }
  .active-text{
  font-size:1.1rem;
}

}


`
export default CartTimeline