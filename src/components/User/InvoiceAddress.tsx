import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDeleteAddressById } from "../../hooks/useDeleteAddressById";
import { InvoiceAddressDto } from "../../types/general";

const InvoiceAddress = ({ id, firstName, lastName, city, street, postCode, telephone, companyName, apartmentNumber, houseNumber, companyNIP }: InvoiceAddressDto) => {

  const { deleteAddress } = useDeleteAddressById(id)

  const handleClick = () => {
  }

  return <div className="invoice">
    <div className="invoice-data">
      <span>{companyName ? companyName : ''}</span>
      <span>{`${firstName} ${lastName}`}</span>
      <span>{apartmentNumber + " " + houseNumber + " " + street}</span>
      <span>{`${postCode} ${city}`}</span>
      <span>{companyNIP}</span>
      <span>{telephone}</span>
    </div>
    <div className="btns">
      <button className="delete" onClick={() => deleteAddress()} ><FiTrash2 /></button>
      <Link to={`/my-account/change-address-person/${id}`} className="change" ><span>Change</span></Link>
    </div>

  </div>
}

export default InvoiceAddress