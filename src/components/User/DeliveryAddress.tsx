import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDeleteAddressMutation } from "../../features/api/userApiSlice";
import { useAppSelector } from "../../hooks/hooks";
import { AddressDto } from "../../types/general";

const DeliveryAddress = ({ id, firstName, lastName, city, street, postCode, telephone, companyName, houseNumber, apartmentNumber }: AddressDto) => {
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const [deleteAddress] = useDeleteAddressMutation()


  const handleDeleteAddress = async () => {

    await deleteAddress({ id, token, url: `/address/${id}` })
  }
  return <div className="invoice">
    <div className="invoice-data">
      <span>{companyName ? companyName : ''}</span>
      <span>{`${firstName} ${lastName}`}</span>
      <span>{street}</span>
      <span>{`${postCode} ${city}`}</span>
      <span>{houseNumber + " " + apartmentNumber}</span>
      <span>Tel: {telephone}</span>
    </div>
    <div className="btns">
      <button className="delete" onClick={() => handleDeleteAddress()}><FiTrash2 /></button>
      <Link to={`/my-account/change-address/${id}`} className="change" ><span>Change</span></Link>
    </div>
  </div>
}

export default DeliveryAddress