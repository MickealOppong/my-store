import { DeliveryAddressDto } from "../../types/general";

const BillingAddress = ({ deliveryAddress }: { deliveryAddress: DeliveryAddressDto }) => {
  const { firstName, lastName, companyName, street, city, apartmentNumber, houseNumber, telephone } = deliveryAddress;
  return <div>
    <p>{firstName + " " + lastName}</p>
    <p>{companyName}</p>
    <p>{street}</p>
    <p>{apartmentNumber + " " + houseNumber}</p>
    <p>{city}</p>
    <p>{telephone}</p>
  </div>
}
export default BillingAddress