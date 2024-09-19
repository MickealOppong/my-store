import { FiTrash2 } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Wrapper from "../../css/userSettings"
import { showEmailContainer, showTelephoneContainer } from "../../features/userToggleSlice"
import { useAppSelector } from "../../util/hooks"
import Overlay from "../general/Overlay"
import EditEmail from "./EditEmail"
import EditTelephone from "./EditTelephone"

export type UserInfo = {
  id: string,
  name: string,
  email: string,
  password: string
  telephone: string,
  deliveryAddress:
  {
    id: string,
    street: string
    city: string
    zipCode: string
  }
  ,
  invoiceAddress:
  {
    id: string,
    street: string
    city: string
    zipCode: string
  }

}

const UserSetting = ({ data }: { data: UserInfo }) => {
  const { name, email, telephone, password, invoiceAddress
    , deliveryAddress
  } = data;
  const { showEmail, showTelephone } = useAppSelector((state) => state.userMenu);
  const dispatch = useDispatch();

  const handleEmailChange = () => {
    dispatch(showEmailContainer());
  }
  const handleTelephoneChange = () => {
    dispatch(showTelephoneContainer());
  }
  return <Wrapper>
    <div className="email-dialog" style={{ display: showEmail ? 'flex' : 'none' }}>
      <EditEmail />
    </div>
    <div className="telephone-dialog" style={{ display: showTelephone ? 'flex' : 'none' }}>
      <EditTelephone />
    </div>
    <div style={{ display: showEmail || showTelephone ? 'flex' : 'none' }}>
      <Overlay />
    </div>

    <section className="personal-info">
      <div className="profile-title">
        <h2>My details</h2>
      </div>
      <div className="user-info">
        {/**NAME */}
        <div className="name-container">
          <div className="name">
            <h4>Name</h4>
            <p>{name}</p>
          </div>
          <Link to={'/my-account/edit-name'} className="edit-btn" >edit</Link>
        </div>
        {/** EMAIL */}
        <div className="email-container">
          <div className="email">
            <h4>Email</h4>
            <p>{email}</p>
          </div>
          <button className="edit-btn" onClick={() => handleEmailChange()} >edit</button>
        </div>
        {/** TELEPHONE */}
        <div className="telephone-container">
          <div className="telephone">
            <h4>Telephone</h4>
            <p>{telephone}</p>
          </div>
          {
            telephone ? <button className="edit-btn" onClick={() => handleTelephoneChange()} >edit</button> : <button className="edit-btn" onClick={() => handleTelephoneChange()} >Add number</button>
          }
        </div>

        {/** PASSWORD */}
        <div className="password-container">
          <div className="password">
            <h4>Password</h4>
            <p>{password}</p>
          </div>
          <Link to={'/my-account/change-password'} className="change-btn">Change password</Link>
        </div>
      </div>
    </section>
    {/**ADDRESS */}
    <section className="address">
      {/** DELIVERY ADDRESS */}
      <div className="delivery-container">
        <h2>Delivery address</h2>
        <div className="delivery">
          <div className="delivery-data">
            <span>{name}</span>
            <span>{deliveryAddress.street}</span>
            <div className="zipCode">
              <span>{deliveryAddress.zipCode + " " + deliveryAddress.city}</span>
            </div>
          </div>
          <div className="btns">
            <button className="delete"><FiTrash2 /></button>
            <button className="change"><span>Change</span></button>
          </div>
        </div>
      </div>
      {/** INVOICE ADDRESS */}
      <div className="invoice-container">
        <h2>Invoice address</h2>
        <div className="invoice">
          <div className="invoice-data">
            <span>{name}</span>
            <span>{invoiceAddress.street}</span>
            <div className="zipCode">
              <span>{invoiceAddress.zipCode + " " + invoiceAddress.city}</span>
            </div>
          </div>
          <div className="btns">
            <button className="delete"><FiTrash2 /></button>
            <button className="change"><span>Change</span></button>
          </div>
        </div>
      </div>
    </section>
  </Wrapper>
}
export default UserSetting