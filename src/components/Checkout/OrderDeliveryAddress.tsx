import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";
import styled from "styled-components";
import { useGetAddressQuery } from "../../features/api/userApiSlice";
import { useAppSelector } from "../../hooks/hooks";
import { DeliveryAddressDto } from "../../types/general";
import { TEditAddress } from "../../types/TEditAddress";
import Overlay from "../general/Overlay";
import AddressForm from "./AddressForm";
import EditAddressForm from "./EditAddressForm";

const defaultObj: DeliveryAddressDto = {
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

}

const OrderDeliveryAddress = () => {
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const userId = useAppSelector((state) => state.userSlice.id)
  const { data: deliveryAddress } = useGetAddressQuery({ token, url: '/address/delivery', userId })

  const [showAddressForm, setShowAddressForm] = useState<boolean>(false)
  const [showAddressInput, setShowAddressInput] = useState<boolean>(false)
  const [selectedAddress, setSelectedAddress] = useState<TEditAddress>(defaultObj)


  const handleClick = (address: TEditAddress) => {
    setSelectedAddress(() => address)
    setShowAddressForm(() => true)
  }

  const handleCheckboxClick = async (address: TEditAddress) => {
    setSelectedAddress(() => address)
  }

  const hideAddressForm = () => {
    setShowAddressForm(() => false)
    setShowAddressInput(() => false)
  }



  if (!deliveryAddress) {
    return null;
  }

  return <Wrapper>
    <div className="delivery-address-container">
      <div className="delivery-address">
        {
          deliveryAddress?.map((address) => {
            const { id, companyName, firstName, lastName, street, postCode, city, telephone } = address
            return <div className="address" key={id}>
              <div className={`checkbox-btn status-btn ${true ? 'checked' : ''}`}
                onClick={() => handleCheckboxClick(address)} ><FaCheck /></div>
              <div className="invoice-data">
                <span>{companyName ? companyName : ''}</span>
                <span>{`${firstName} ${lastName}`}</span>
                <span>{street}</span>
                <span>{`${postCode} ${city}`}</span>
                <span>Tel: {telephone}</span>
              </div>
              <div className="btns">
                <button className="change" onClick={() => handleClick(address)}><span>Change</span></button>
              </div>
            </div>
          })
        }
      </div>
      <div className="add-address-container" onClick={() => setShowAddressInput(() => true)}>
        <button className="add-address" ><TiLocationOutline /></button>
        <span>Add new address</span>
      </div>
    </div>


    <div style={{ display: showAddressForm ? 'flex' : 'none' }}>
      <Overlay />
      <EditAddressForm {...selectedAddress} hideAddressForm={hideAddressForm} title="Edit address" />
    </div>

    <div style={{ display: showAddressInput ? 'flex' : 'none' }}>
      <Overlay />
      <AddressForm hideAddressForm={hideAddressForm} title="Add new address" />
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;


  .delivery-data{
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    font-size:1rem;
   color: var(---textColor-1);
  }

  .delivery-address-container{
  display: flex;
  column-gap:5px;
}

.delivery-address{
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

`
export default OrderDeliveryAddress