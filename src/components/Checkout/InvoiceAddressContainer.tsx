import { useDispatch } from "react-redux";
import styled from "styled-components";
import { showCompanyAddressForm } from "../../features/userToggleSlice";
import InvoiceAddress from "./InvoiceAddress";

const InvoiceAddressContainer = () => {


  const dispatch = useDispatch();

  const handleEditBtnClick = () => {
    dispatch(showCompanyAddressForm())
  }
  return <Wrapper>
    <div className="delivery-address">
      <InvoiceAddress />
    </div>
    <div>
      <button className="edit-btn" onClick={() => handleEditBtnClick()}>edit details</button>
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
  color: var(---primary);
  font-size:0.65rem;
  letter-spacing: var(---spacing-1);
  margin-left:-9px;
  cursor: pointer;
  }

`
export default InvoiceAddressContainer