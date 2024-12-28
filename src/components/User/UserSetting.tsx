import { Link } from "react-router-dom"
import Wrapper from "../../css/userSettings"
import { useAppSelector } from "../../hooks/hooks"
import Overlay from "../general/Overlay"
import ConfirmTelephone from "./ConfirmTelephone"
import DeliveryAddressList from "./DeliveryAddressList"
import EditEmail from "./EditEmail"
import EditTelephone from "./EditTelephone"
import InvoiceAddressList from "./InvoiceAddressList"
import PersonalInfo from "./PersonalInfo"


const UserSetting = () => {
  const { showEmail, showTelephone, verificationForm } = useAppSelector((state) => state.userMenu);


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
    {/** PERSONAL INFO */}
    <div>
      <PersonalInfo />
    </div>
    {/**ADDRESS */}
    <section className="address">
      {/** DELIVERY ADDRESS */}
      <div className="delivery-container">
        <div>
          <h2>Delivery address</h2>
        </div>
        <div>
          <DeliveryAddressList />
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
          {/**
           * 
           */}
          <InvoiceAddressList />
        </div>
        <div>
          <Link to={'/my-account/add-address-invoice'} className="add-invoice-btn"><span>Add new invoice address</span></Link>
        </div>
      </div>

    </section>
  </Wrapper>
}
export default UserSetting