import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import styled from "styled-components";
import { useGetAddressQuery } from "../../features/api/userApiSlice";
import { useAppSelector } from "../../hooks/hooks";
import { TAddressDto } from "../../types/TAddressDto";
import Overlay from "../general/Overlay";
import AddCheckoutInvoiceAddress from "./AddCheckoutInvoiceAddress";
import AddressFormCompany from "./AddressFormCompany";
import AddressFormPerson from "./AddressFormPerson";

const defaultObj: TAddressDto = {
  id: 0,
  firstName: '',
  lastName: '',
  street: '',
  companyName: '',
  city: '',
  houseNumber: '',
  apartmentNumber: '',
  telephone: '',
  postCode: '',
  orderId: -1,
  globalAddressId: -1,
  companyNIP: ''
}

const OrderInvoiceAddress = () => {
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const userId = useAppSelector((state) => state.userSlice.id)
  const { data: invoiceAddress } = useGetAddressQuery({ token, url: '/address/invoice-address', userId })

  const [showAddressForm, setShowAddressForm] = useState<boolean>(false);
  const [showAddAddressForm, setShowAddAddressForm] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<TAddressDto>(defaultObj)

  const handleCheckbox = () => {

  }

  //console.log(selectedAddress);

  const hideAddressForm = () => {
    setShowAddressForm(() => false)
  }

  const hideAddAddressForm = () => {
    setShowAddAddressForm(() => false)
  }


  const handleAddAddressClick = () => {
    setShowAddAddressForm(() => true)
  }


  const handleBtnClick = (address: TAddressDto) => {
    setSelectedAddress(() => address)
    setShowAddressForm(() => true)
  }



  if (!invoiceAddress) {
    return null;
  }
  return <Wrapper>
    <div className="invoice-address-container">
      <div className="invoice-address">
        {
          invoiceAddress?.map((address) => {
            const { id, city, street, postCode, telephone, companyName, companyNIP, firstName, lastName } = address;

            return <div className="address" key={id}>
              <div className={`checkbox-btn status-btn ${true ? 'checked' : ''}`}
                onClick={() => handleCheckbox()} ><FaCheck /></div>
              <div className="invoice-data">
                <span>{companyName}</span>
                <span style={{ display: firstName ? 'flex' : 'none' }}>{firstName + " " + lastName}</span>
                <span>{companyNIP}</span>
                <span>{street}</span>
                <span>{`${postCode} ${city}`}</span>
                <span>{telephone}</span>
              </div>
              <div className="btns">
                <button className="change" onClick={() => handleBtnClick(address)} ><span>Change</span></button>
              </div>
            </div>
          })
        }
      </div>
      <div className="add-address-container" >
        <button className="add-address" onClick={() => handleAddAddressClick()}><TiLocationOutline /><span>Add new address</span></button>
      </div>
    </div>
    <div style={{ display: showAddressForm ? 'flex' : 'none' }}>
      <Overlay />
      {
        selectedAddress?.firstName ?
          <AddressFormPerson {...selectedAddress} hideAddressForm={hideAddressForm} title="Edit address" /> :
          <AddressFormCompany {...selectedAddress} hideAddressForm={hideAddressForm} title="Edit address" />
      }
    </div>
    <div style={{ display: showAddAddressForm ? 'flex' : 'none' }} className="address-input">
      <Overlay />
      <AddCheckoutInvoiceAddress hideAddressForm={hideAddAddressForm} />
    </div>


  </Wrapper >
}
const Wrapper = styled.div`
display: flex;
row-gap: 10px;


.invoice-address-container{
  display: flex;
  column-gap:5px;
}

.invoice-address{
  display: flex;
  flex-direction: row;
  column-gap:5px;

}

.address{
  display: flex;
  flex-direction: column;
  padding: 5px;
  border: var(---ghost) solid 1px;
}

.add-address-container{
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
    border: var(---ghost) solid 1px;
     padding: 5px;
}

.add-address{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-color:transparent;
  color: var(---light);
  font-size:1rem;
  transition:all .2s ease-in-out;
    cursor: pointer;
}


.add-address-container span{
  font-size:0.85rem;
}
  .edit-btn{
  display: flex;
  align-items: center;
  background-color: transparent;
  border-color:transparent;
  text-transform:uppercase;
  color: var(---primary);
  font-size:0.65rem;
  letter-spacing: var(---spacing-1);
  margin-left:-9px;
  cursor: pointer;
  }



`
export default OrderInvoiceAddress


