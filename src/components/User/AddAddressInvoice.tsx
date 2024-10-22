import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CompanyAddressFormInput from "../general/ComapnyAddressFormInput";
import PersonDeliveryAddress from "../general/PersonDeliveryAddress";


const AddAddressInvoice = () => {
  const [selectedForm, setSelectedForm] = useState<string>('company');
  return <Wrapper>
    <div className="address-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Add invoice address</h2>
    </div>
    <div className="form">
      <div className="toggle-container">
        <h4 className="toggle-label">Invoice to</h4>
        <div className="btns">
          <div className="company">
            <span>Company</span>
            <div className={`company-container ${selectedForm === 'company' ? 'active-btn' : ''}`} onClick={() => setSelectedForm(() => 'company')}>
              <span></span>
            </div>
          </div>
          <div className="person">
            <span>Person</span>
            <div className={`person-container ${selectedForm === 'person' ? 'active-btn' : ''}`} onClick={() => setSelectedForm(() => 'person')}>
              <span></span>
            </div>
          </div>
        </div>

      </div>
      <div>
        {
          selectedForm === 'company' ?
            <CompanyAddressFormInput /> : <PersonDeliveryAddress />
        }
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;

row-gap: 2rem;
.address-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 0  auto;
width: 100%;;

}

.address-title h2{
  font-weight:500;
}

.link-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border-radius:50%;
  box-shadow:var(---shadow-1);
  font-size:var(---fontSize-2);
  color: black;
  cursor: pointer;
}

.toggle-container{
  display: flex;
  align-items: center;
  width: 100%;
  column-gap:10px;
  background-color: var(---white);
  padding: 1rem;
}

.toggle-label{
  font-weight:500;
  width: 20%;
}


.btns{
  display: flex;
  align-items: center;
  width: 100%;
  column-gap:2rem;
}
.company,
.person{
  display: flex;
  align-items: center;
  column-gap:5px;
  
}

.company-container,
.person-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  border:var(---primary) solid 1px ;
  border-radius:50%;
}

.company-container span,
.person-container span{
  display: flex;
  align-items: center;
  width: 0.7rem;
  height: 0.7rem;
  border-radius:50%;
}

.active-btn span{
  background-color: var(---primary);
}
`
export default AddAddressInvoice