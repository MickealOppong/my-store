import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddressFormInput from "../general/AddressFormInput";
import CompanyAddressFormInput from "../general/ComapnyAddressFormInput";


const list = ['Business', 'Person']
const ChangeAddressInvoice = () => {
  const [current, setCurrent] = useState<number>(0);


  const handleClick = (input: number) => {

    setCurrent(() => input);
  }

  return <Wrapper>
    <div className="address-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change invoice address</h2>
    </div>
    <div className="parent">
      <div className="parent-container">
        {
          list.map((item, index) => {
            return <button className={`form-btn-container ${current === index ? 'active' : ''}`} key={item} onClick={() => handleClick(index)}>
              <div className="checkbox-container">
                <div className="checkbox"></div>
              </div>
              <span>{item}</span>
            </button>
          })
        }
      </div>
      <div className="form-container" style={{ display: current === 1 ? 'flex' : 'none' }}>
        <AddressFormInput />
      </div>
      <div className="form-container" style={{ display: current === 0 ? 'flex' : 'none' }}>
        <CompanyAddressFormInput />
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:1rem;


  .address-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 1rem  auto;
width: 100%;;
}


.link-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border-radius:50%;
  box-shadow:0 5px 5px  rgba(0,0,0,0.2);
  font-size:var(---fontSize-2);
  color: black;
  cursor: pointer;

}


.parent{
  display: flex;
  flex-direction: column;
    row-gap: 1rem;
  background-color: var(---white);
  padding-top:10px;
  padding-bottom:1rem;
}
  .parent-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15rem;
    margin-left:10px;
  }

  .form-btn-container{
    display: flex;
    column-gap:5px;
    background-color: transparent;
    border-color:transparent;
    cursor: pointer;
  }

  .checkbox-container{
  display: flex;
  justify-content:center;
  align-items: center;
  width: 10px;
  height: 10px;
  border:var(---secondary) solid 2px;
  border-radius:50%;
}

.checkbox{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6px;
  height: 6px;
  background-color: var(---white);
  border-radius:50%;
}

.active .checkbox{
  background-color: var(---secondary);
}

@media screen and (min-width: 768px){
  .parent{
  padding: 1rem;
}
}

@media screen and (min-width: 1092px){
  .parent{
  padding: 2rem;
}
}
`
export default ChangeAddressInvoice