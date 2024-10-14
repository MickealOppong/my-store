import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import cod from '../../assets/cod.png';
import visa from '../../assets/visa.png';
import PaymentOption from "./PaymentOption";

export type payOption = {
  id: string,
  img: string,
  active: boolean
}
export const payOption: payOption[] = [
  {
    id: nanoid(),
    img: visa,
    active: true
  },
  {
    id: nanoid(),
    img: cod,
    active: false
  }, {
    id: nanoid(),
    img: visa,
    active: true
  },
  {
    id: nanoid(),
    img: cod,
    active: false
  },
  {
    id: nanoid(),
    img: visa,
    active: true
  },
  {
    id: nanoid(),
    img: cod,
    active: false
  }
]
const PaymentOptions = ({ data }: { data: payOption[] }) => {

  const [dataContainer, setDataContainer] = useState<payOption[]>(data);

  const handleClick = (id: string) => {

    const newData = dataContainer.map((item) => {
      if (item.id !== id) {
        item.active = false;
      } else {
        item.active = true;
      }
      return item;
    })
    setDataContainer(() => newData)
  }


  return <Wrapper>
    <div className="payment-title">
      <p>Payment method</p>
    </div>
    <div className="parent-options">
      {
        dataContainer.map((item) => {
          return <div className="options" onClick={() => handleClick(item.id)} key={item.id}>
            <PaymentOption {...item} key={item.id} />
          </div>
        })
      }
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 1rem;
width: 100%;

.parent-options{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom:1.5rem;
}

.options{
  display: flex;
  flex-direction: column;
}



    .payment-title{
      display: flex;
      font-size:var(---fontSize-1);
      font-weight:500;
    }

    @media screen and (min-width: 1092px){

}
`
export default PaymentOptions