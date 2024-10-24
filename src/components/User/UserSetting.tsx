import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Wrapper from "../../css/userSettings"
import { showEmailContainer, showTelephoneContainer } from "../../features/userToggleSlice"
import { useAppSelector } from "../../hooks/hooks"
import Overlay from "../general/Overlay"
import ConfirmTelephone from "./ConfirmTelephone"
import EditEmail from "./EditEmail"
import EditTelephone from "./EditTelephone"
import UserAddressList from "./UserAddressList"
import UserInvoiceAddressList from "./UserInvoiceAddressList"


const UserSetting = ({ firstName, lastName, username, number }: { firstName: string, lastName: string, username: string, number: string }) => {
  const { showEmail, showTelephone, verificationForm } = useAppSelector((state) => state.userMenu);
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
    <div className="telephone-dialog" style={{ display: verificationForm ? 'flex' : 'none' }}>
      <ConfirmTelephone />
    </div>
    <div style={{ display: showEmail || showTelephone || verificationForm ? 'flex' : 'none' }}>
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
            <p>{firstName + " " + lastName}</p>
          </div>
          <Link to={'/my-account/edit-name'} className="edit-btn" >edit</Link>
        </div>
        {/** EMAIL */}
        <div className="email-container">
          <div className="email">
            <h4>Email</h4>
            <p>{username}</p>
          </div>
          <button className="edit-btn" onClick={() => handleEmailChange()} >edit</button>
        </div>
        {/** TELEPHONE */}
        <div className="telephone-container">
          <div className="telephone">
            <h4>Telephone</h4>
            <p>{number}</p>
          </div>
          {
            number ? <button className="edit-btn" onClick={() => handleTelephoneChange()} >edit</button> : <button className="edit-btn" onClick={() => handleTelephoneChange()} >Add number</button>
          }
        </div>

        {/** PASSWORD */}
        <div className="password-container">
          <div className="password">
            <h4>Password</h4>
            <p>{''}</p>
          </div>
          <Link to={'/my-account/change-password'} className="change-btn">Change password</Link>
        </div>
      </div>
    </section>
    {/**ADDRESS */}
    <section className="address">
      {/** DELIVERY ADDRESS */}
      <div className="delivery-container">
        <div>
          <h2>Delivery address</h2>
        </div>
        <div>
          <UserAddressList />
        </div>
        <div>
          <Link to={'/my-account/add-address'} className="add-address-btn"><span>Add new delivery address</span></Link>
        </div>
      </div>
      {/** INVOICE ADDRESS */}
      <div className="invoice-container">
        <div>
          <h2>Invoice address</h2>
        </div>
        <div>
          <UserInvoiceAddressList />
        </div>
        <div>
          <Link to={'/my-account/add-address-invoice'} className="add-invoice-btn"><span>Add new invoice address</span></Link>
        </div>
      </div>

    </section>
  </Wrapper>
}
export default UserSetting