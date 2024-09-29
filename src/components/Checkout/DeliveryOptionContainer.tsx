import { useState } from "react";
import styled from "styled-components";
import { DeliveryOptions } from "../../types/general";
import DeliveryOption from "./DeliveryOption";



const DeliveryOptionContainer = ({ data }: { data: DeliveryOptions[] }) => {
  const [dataContainer, setDataContainer] = useState<DeliveryOptions[]>(data);
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
    {
      <div className="parent">
        <div className="delivery-type">
          <p>Delivery options</p>
        </div>
        <div className="content">
          {
            dataContainer.map((option) => {
              return <div className="option" onClick={() => handleClick(option.id)} key={option.id}>
                <div className={`check-div ${option.active ? 'active' : ''}`} >
                  <div className="checkbox"></div>
                </div>
                <DeliveryOption {...option} />
              </div>
            })
          }
        </div>
      </div>
    }
  </Wrapper>
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;


     .delivery-type{
      display: flex;
      font-size:var(---fontSize-2);
      font-weight:900;
       border-bottom: var(---secondary) solid 2px;
    }

    .option{
      display: flex;
      align-items: center;
    }
    .check-div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    border-radius:50%;
    border: var(---secondary) solid 2px;
}

.checkbox{
  width: 0.7rem;
  height: 0.7rem;
  border-radius:50%;
}

.active .checkbox{
  background-color: var(---secondary); 
}

@media screen and (min-width: 1092px){

}

`
export default DeliveryOptionContainer