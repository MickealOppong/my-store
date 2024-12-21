import InvoiceAddressContainerCompany from "./InvoiceAddressContainerCompany";
import InvoiceAddressContainerPerson from "./InvoiceAddressContainerPerson.";

const UserInvoiceAddressList = () => {
  return <div>
    <div>
      <InvoiceAddressContainerPerson />
    </div>
    <div>
      <InvoiceAddressContainerCompany />
    </div>
  </div>
}
export default UserInvoiceAddressList