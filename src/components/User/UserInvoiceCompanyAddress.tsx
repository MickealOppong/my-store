import { FiTrash2 } from "react-icons/fi"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { InvoiceAddress } from "../../types/general"

const UserInvoiceCompanyAddress = ({ companyTIN, city, street, postCode, companyName }: InvoiceAddress) => {
  return <Wrapper>
    <div>
      <p>Company</p>
    </div>
    <div className="address">
      <div className="address-data">
        <span>{companyName}</span>
        <span>{street}</span>
        <span>{`${postCode} ${city}`}</span>
        <span>{companyTIN}</span>
      </div>
      <div className="btns">
        <button className="delete"><FiTrash2 /></button>
        <Link to={`/my-account/change-address`} className="change"><span>Change</span></Link>
      </div>
    </div>

  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .address{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .address-data{
     display: flex;
   flex-direction:column;
  }
`
export default UserInvoiceCompanyAddress