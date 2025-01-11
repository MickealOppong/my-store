import { FaPhone } from "react-icons/fa";
import { Wrapper } from "../../css/SingleAddress";
import { TAddressDto } from "../../types/TAddressDto";

const BillingAddress = ({ deliveryAddress }: { deliveryAddress: TAddressDto }) => {
  if (!deliveryAddress) {
    return null;
  }
  return <Wrapper>
    <div>
      <h4>Shipping address</h4>
    </div>
    <div className="address-container">
      <p>{deliveryAddress?.firstName + " " + deliveryAddress?.lastName}</p>
      <p>{deliveryAddress?.companyName}</p>
      <p>{`${deliveryAddress?.street} ${deliveryAddress?.houseNumber}/${deliveryAddress?.apartmentNumber}`}</p>
      <p>{`${deliveryAddress?.postCode} ${deliveryAddress?.city}`}</p>
      <p className="telephone"><FaPhone />{deliveryAddress?.telephone}</p>
    </div>
  </Wrapper>
}
export default BillingAddress