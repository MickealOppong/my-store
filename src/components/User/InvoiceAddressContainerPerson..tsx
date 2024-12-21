import { useLoaderData } from "react-router-dom";
import { UserResponseData } from "../../types/general";
import InvoiceAddress from "./InvoiceAddress";

const InvoiceAddressContainerPerson = () => {
  const { invoicePersonAddressList } = useLoaderData() as UserResponseData


  if (!invoicePersonAddressList) {
    return <></>
  }
  if (invoicePersonAddressList.length === 0) {
    return <></>
  }


  return <div>
    <div>
      {
        invoicePersonAddressList?.map((address) => {
          return <InvoiceAddress {...address} key={address.id} />
        })
      }
    </div>
  </div>
}
export default InvoiceAddressContainerPerson