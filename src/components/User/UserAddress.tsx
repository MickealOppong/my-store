import { FiTrash2 } from "react-icons/fi"
import { Link } from "react-router-dom"
import { DeliveryAddress } from "../../types/general"

const UserAddress = ({ firstName, lastName, city, street, postCode, telephone, companyName }: DeliveryAddress) => {
  return <div className="invoice">
    <div className="invoice-data">
      <span>{companyName ? companyName : ''}</span>
      <span>{`${firstName} ${lastName}`}</span>
      <span>{street}</span>
      <span>{`${postCode} ${city}`}</span>
      <span>Tel: {telephone}</span>
    </div>
    <div className="btns">
      <button className="delete"><FiTrash2 /></button>
      <Link to={`/my-account/change-address`} className="change"><span>Change</span></Link>
    </div>
  </div>
}

export default UserAddress