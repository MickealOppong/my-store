import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { getFromLocalStorage } from "../../util/util";
import OrderDeliveryAddress from "./OrderDeliveryAddress";
import OrderInvoiceAddress from "./OrderInvoiceAddress";



const CheckoutAddress = () => {

  const defaultCheck = parseInt(getFromLocalStorage('_ch.box') || '0') | 0
  const [selected, setSelected] = useState<number>(defaultCheck);


  const handleCheck = () => {

    if (selected === 1) {
      localStorage.setItem('_ch.box', '0')
      setSelected(() => 0)
    }
    else {
      localStorage.setItem('_ch.box', '1')
      setSelected(() => 1)
    }
  }

  return <Wrapper>
    <div>
      <div className="address-title">
        <p>Recipient's details</p>
      </div>
      <OrderDeliveryAddress />
    </div>

    <div className="parent">
      <div className="invoice-address">
        <div>
          <h4>Do  you need an invoice  for the order?</h4>
        </div>
        <div className="invoice-address-toggle">
          <div className={`checkbox-btn status-btn ${selected === 1 ? 'checked' : ''}`} onClick={() => handleCheck()} ><FaCheck /></div>
          <span>I want to receive an invoice</span>
        </div>
      </div>
      <div className="parent" style={{ display: selected === 1 ? 'flex' : 'none' }}>
        <OrderInvoiceAddress />
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
 display :flex;
 flex-direction: column;


.parent{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
}

.invoice-address{
display: flex;
flex-direction: column;
}

.invoice-address-toggle{
  display: flex;
  align-items: center;
  column-gap:10px;
}

.invoice-address-toggle span{
  font-size:0.85rem;
}
.address-container{
  padding: 10px;
  width: 15rem;
  border-radius:5px;
}

.address-title{
  display: flex;
  font-size:var(---fontSize-1);
  font-weight:500;
  border-bottom: var(---primary) solid 2px;
}

.checkbox-container{
  display: flex;
  align-items: center;
  column-gap:10px;
  margin-bottom:10px;
}

input[type="checkbox"]{
accent-color: var(---primary);
}



  .checkbox-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(---white);
  border-color:transparent;
  width:10px;
  height: 10px;
  border:var(---textColor)  solid 2px;
  border-radius:2px;
  cursor: pointer;
}

.checkbox-btn svg{
 color: var(---white);
}

.checked{
  font-weight:900;
  border:var(---secondary)  solid 2px;
}

.checked svg{
  font-weight:900;
  color: var(---secondary);
}



@media screen and (min-width: 768px) {

}


`
export default CheckoutAddress