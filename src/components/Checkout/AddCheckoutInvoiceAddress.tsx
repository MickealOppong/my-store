import { useState } from "react";
import styled from "styled-components";
import AddInvoiceAddressCompany from "./AddInvoiceAddressCompany";
import AddInvoiceAddressPerson from "./AddInvoiceAddressPerson";


const AddCheckoutInvoiceAddress = ({ hideAddressForm }: { hideAddressForm: () => void }) => {
  const [selectedForm, setSelectedForm] = useState<string>('company');

  return <Wrapper>
    <div className="address-title">
      <h2>Add invoice address</h2>
    </div>
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
    <div className="input-address-form" >

      {
        selectedForm === 'company' ? <AddInvoiceAddressCompany hideAddressForm={hideAddressForm} />
          : <AddInvoiceAddressPerson hideAddressForm={hideAddressForm} />
      }
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
position: absolute;
top: 0;
left: 5%;
display: flex;
flex-direction: column;
z-index: 2;

background-color: var(---white);

.toggle-container{
  display: flex;
  align-items: center;
  column-gap:10px;
  padding: 1rem;
}

.toggle-label{
  font-weight:500;
  width: 20%;
}


.btns{
  display: flex;
  align-items: center;
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

@media screen and (min-width: 768px) {
  left: 10%;
}

@media screen and (min-width: 1092px) {
  left: 20%;
}
`
export default AddCheckoutInvoiceAddress