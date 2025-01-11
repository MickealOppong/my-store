import { Wrapper } from "../../css/SingleAddress";
import { TAddressDto } from "../../types/TAddressDto";

const ShippingAddress = ({ billingAddress }: { billingAddress: TAddressDto }) => {
  const { firstName, lastName, companyNIP, companyName, street, city, apartmentNumber, houseNumber, postCode } = billingAddress;

  if (!billingAddress) {
    return null;
  }
  return <Wrapper>
    <div>
      <h4>Billing address</h4>
    </div>
    <div className="address-container">
      <p>{firstName ? firstName : '' + " " + lastName ? lastName : ''}</p>
      <p>{companyName}</p>
      <p>{companyNIP}</p>
      <p>{`${street}  ${apartmentNumber}/${houseNumber}`}</p>
      <p>{`${postCode}  ${city}`}</p>
    </div>
  </Wrapper>
}
export default ShippingAddress