import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Wrapper from "../../css/userSettings"
import { showEmailContainer, showTelephoneContainer } from "../../features/userToggleSlice"
import { useAppSelector } from "../../util/hooks"
import Overlay from "../general/Overlay"
import EditEmail from "./EditEmail"
import EditTelephone from "./EditTelephone"
import UserAddress from "./UserAddress"
import UserInvoiceAddress from "./UserInvoiceAddress"


const UserSetting = ({ firstName, lastName, username, number }: { firstName: string, lastName: string, username: string, number: string }) => {
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
        <h2>Delivery address</h2>
        <UserAddress />
      </div>
      {/** INVOICE ADDRESS */}
      <div className="invoice-container">
        <h2>Invoice address</h2>
        <UserInvoiceAddress />
      </div>
    </section>
  </Wrapper>
}
export default UserSetting