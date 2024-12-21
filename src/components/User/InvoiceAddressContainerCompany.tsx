import { useLoaderData } from "react-router-dom";
import { UserResponseData } from "../../types/general";
import InvoiceCompanyAddress from "./InvoiceCompanyAddress";

const InvoiceAddressContainerCompany = () => {
  const { invoiceFirmAddressList } = useLoaderData() as UserResponseData


  if (!invoiceFirmAddressList) {
    return <></>
  }

  if (invoiceFirmAddressList.length === 0) {
    return <></>
  }
  return <div>
    <div>
      {
        invoiceFirmAddressList?.map((address) => {
          return <InvoiceCompanyAddress {...address} key={address.id} />
        })
      }
    </div>
  </div>
}
export default InvoiceAddressContainerCompany