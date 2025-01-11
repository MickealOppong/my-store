import { FiTrash2 } from "react-icons/fi"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useDeleteAddressMutation } from "../../features/api/userApiSlice"
import { useAppSelector } from "../../hooks/hooks"
import { InvoiceAddressDto } from "../../types/general"

const InvoiceCompanyAddress = ({ id, companyNIP, city, street, postCode, companyName, houseNumber, apartmentNumber }: InvoiceAddressDto) => {

  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const [deleteAddress] = useDeleteAddressMutation()


  const handleDeleteAddress = async () => {

    await deleteAddress({ id, token, url: `/address/${id}` })
  }
  return <Wrapper>
    <div>
      <p>Company</p>
    </div>
    <div className="address">
      <div className="address-data">
        <span>{companyName}</span>
        <span>{companyNIP}</span>
        <span>{street}</span>
        <span>{houseNumber}</span>
        <span>{apartmentNumber}</span>
        <span>{`${postCode} ${city}`}</span>

      </div>
      <div className="btns">
        <button className="delete" onClick={() => handleDeleteAddress()} ><FiTrash2 /></button>
        <Link to={`/my-account/change-address-Company/${id}`} className="change"><span>Change</span></Link>
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
export default InvoiceCompanyAddress