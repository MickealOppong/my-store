import { FiTrash2 } from "react-icons/fi"
import { Link } from "react-router-dom"

const UserInvoiceAddress = ({ name, street, zipCode, city }: { id: string, name: string, street: string, zipCode: string, city: string }) => {
  return <div className="invoice">
    <div className="invoice-data">
      <span>{name}</span>
      <span>{street}</span>
      <div className="zipCode">
        <span>{zipCode + " " + city}</span>
      </div>
    </div>
    <div className="btns">
      <button className="delete"><FiTrash2 /></button>
      <Link to={`/my-account/change-address-invoice`} className="change"><span>Change</span></Link>
    </div>
  </div>
}

export default UserInvoiceAddress