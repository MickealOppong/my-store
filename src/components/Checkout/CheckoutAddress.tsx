import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks/hooks";
import AddressForm from "./AddressForm";
import AddressFormContainer from "./AddressFormContainer";
import DeliveryAddressContainer from "./DeliveryAddressContainer";
import InvoiceAddressContainer from "./InvoiceAddressContainer";

const CheckoutAddress = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const showCompanyAddressForm = useAppSelector((state) => state.userMenu.showCompanyAddressForm)
  const showAddressForm = useAppSelector((state) => state.userMenu.showAddressForm)

  return <Wrapper>
    <div className="address-title">
      <p>Recipient's details</p>
    </div>
    <div className="parent">
      {
        showAddressForm ? <AddressForm /> : <div className="address-container">
          <DeliveryAddressContainer />
        </div>
      }
      <div className="checkbox-container">
        <input type="checkbox" name="invoice" id="invoice" onChange={() => setSelected(() => !selected)} className="checkbox" />
        <span >I want to receive VAT invoice</span>
      </div>
      <div className="parent" style={{ display: selected ? 'flex' : 'none' }}>
        {
          showCompanyAddressForm ? <AddressFormContainer /> : <div className="address-container">
            <InvoiceAddressContainer />
          </div>
        }
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

.checkbox-container span{
  font-size:0.85rem;
  color: var(---primary);
}

@media screen and (min-width: 768px) {

}


`
export default CheckoutAddress