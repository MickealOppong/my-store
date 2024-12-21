import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUpdateOrderAddress } from "../../hooks/useUpdateOrderAddress";
import { InvoiceAddressDto, ResponseData } from "../../types/general";
import Overlay from "../general/Overlay";
import AddCheckoutInvoiceAddress from "./AddCheckoutInvoiceAddress";
import AddressFormCompany from "./AddressFormCompany";
import AddressFormPerson from "./AddressFormPerson";


const InvoiceAddressContainer = () => {
  const { invoiceAddressList, userOrder } = useLoaderData() as ResponseData
  //const userId = useAppSelector((state) => state.userSlice.id)
  const selected = invoiceAddressList.find((item) => item.id === userOrder?.orderInvoiceAddress?.globalAddressId) as InvoiceAddressDto


  const [selectedAddress, setSelectedAddress] = useState<number>(selected ? selected.id : invoiceAddressList.length > 0 ? invoiceAddressList[0].id : 1)

  const [showAddressForm, setShowAddressForm] = useState<boolean>(false)
  const [showAddressInput, setShowAddressInput] = useState<boolean>(false)
  const { updateAddress } = useUpdateOrderAddress('/orders/change-invoice-address')
  const navigate = useNavigate()

  const handleClick = (id: number) => {
    setShowAddressForm(() => true)
    setSelectedAddress(() => id)
    updateAddress(id)
  }

  const handleCheckboxClick = async (id: number) => {
    setSelectedAddress(() => id)
    const response = await updateAddress(id)
    if (response) {
      navigate('/cart/checkout')
    }
  }

  const hideAddressForm = () => {
    setShowAddressForm(() => false)
    setShowAddressInput(() => false)
  }

  const myAddress = invoiceAddressList?.find((add) => add.id === selectedAddress) as InvoiceAddressDto


  return <Wrapper>
    <div className="invoice-address-container">
      <div className="invoice-address">
        {
          invoiceAddressList?.map((address) => {
            const { id, city, street, postCode, telephone, companyName, companyNIP, firstName, lastName } = address;

            return <div className="address" key={id}>
              <div className={`checkbox-btn status-btn ${selectedAddress === id ? 'checked' : ''}`}
                onClick={() => handleCheckboxClick(id)} ><FaCheck /></div>
              <div className="invoice-data">
                <span>{companyName}</span>
                <span style={{ display: firstName ? 'flex' : 'none' }}>{firstName + " " + lastName}</span>
                <span>{companyNIP}</span>
                <span>{street}</span>
                <span>{`${postCode} ${city}`}</span>
                <span>{telephone}</span>
              </div>
              <div className="btns">
                <button className="change" onClick={() => handleClick(id)}><span>Change</span></button>
              </div>
            </div>
          })
        }
      </div>
      <div className="add-address-container" onClick={() => setShowAddressInput(() => true)}>
        <button className="add-address"><TiLocationOutline /></button>
        <span>Add new address</span>
      </div>
    </div>
    <div style={{ display: showAddressForm ? 'flex' : 'none' }}>
      <Overlay />
      {
        myAddress?.firstName ?
          <AddressFormPerson {...myAddress} hideAddressForm={hideAddressForm} title="Edit address" /> :
          <AddressFormCompany {...myAddress} hideAddressForm={hideAddressForm} title="Edit address" />
      }

    </div>
    <div style={{ display: showAddressInput ? 'flex' : 'none' }} className="address-input">
      <Overlay />
      <AddCheckoutInvoiceAddress hideAddressForm={hideAddressForm} />
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
  justify-content: center;
  background-color: transparent;
  border-color:transparent;
  color: var(---light);
  font-size:1rem;
  
  transition:all .2s ease-in-out;
}

.add-address-container:hover{
  
  cursor: pointer;
}

.add-address-container:hover .add-address{
    font-size:1.3rem;
    color: var(---primary);
   transition:all .2s ease-in-out;
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
export default InvoiceAddressContainer


