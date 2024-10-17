import { FiTrash2 } from "react-icons/fi"
import { Link } from "react-router-dom"

const UserInvoiceAddress = () => {
  return <div className="invoice">
    <div className="invoice-data">
      <span>{''}</span>
      <span>{''}</span>
      <div className="zipCode">
        <span>{''}</span>
      </div>
    </div>
    <div className="btns">
      <button className="delete"><FiTrash2 /></button>
      <Link to={`/my-account/change-address-invoice`} className="change"><span>Change</span></Link>
    </div>
  </div>
}

export default UserInvoiceAddress