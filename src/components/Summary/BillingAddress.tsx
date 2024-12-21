import { InvoiceAddressDto } from "../../types/general";

const ShippingAddress = ({ billingAddress }: { billingAddress: InvoiceAddressDto }) => {
  const { firstName, lastName, companyNIP, companyName, street, city, apartmentNumber, houseNumber } = billingAddress;

  return <div>
    <p>{firstName + " " + lastName}</p>
    <p>{companyName}</p>
    <p>{companyNIP}</p>
    <p>{street}</p>
    <p>{apartmentNumber + " " + houseNumber}</p>
    <p>{city}</p>
  </div>
}
export default ShippingAddress