import { useDispatch } from "react-redux";
import styled from "styled-components";
import { showAddressForm } from "../../features/userToggleSlice";
import { userData } from "../User/AccountSetting";
import DeliveryAddress from "./DeliveryAddress";

const DeliveryAddressContainer = () => {
  const dispatch = useDispatch();

  const handleEditBtnClick = () => {
    dispatch(showAddressForm())
  }


  return <Wrapper>
    <div className="delivery-address">
      <DeliveryAddress telephone={userData.telephone} name={userData.name} {...userData.deliveryAddress} />
    </div>
    <div>
      <button className="edit-btn" onClick={() => handleEditBtnClick()}>edit address</button>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;



  .edit-btn{
  display: flex;
  align-items: center;
  background-color: transparent;
  border-color:transparent;
  text-transform:uppercase;
  color: var(---secondary);
  font-size:0.65rem;
  letter-spacing: var(---spacing-1);
  margin-left:-9px;
  cursor: pointer;
  }

`
export default DeliveryAddressContainer