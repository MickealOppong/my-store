import { useGetAddressQuery } from "../../features/api/userApiSlice";
import { useAppSelector } from "../../hooks/hooks";
import InvoiceCompanyAddress from "./InvoiceCompanyAddress";

const InvoiceAddressContainerCompany = () => {
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const userId = useAppSelector((state) => state.userSlice.id)
  const params = {
    userId,
    token,
    url: '/address/invoice-company'
  }

  const { data, isError, isLoading } = useGetAddressQuery(params)

  if (isError) {
    return <div>
      <p>Could not retrieve data</p>
    </div>
  }

  if (!data) {
    return null;
  }

  if (isLoading) {
    return <div>
      <p>Loading...</p>
    </div>
  }
  return <div>
    <div>
      {
        data?.map((address) => {
          return <InvoiceCompanyAddress {...address} key={address.id} />
        })
      }
    </div>
  </div>
}
export default InvoiceAddressContainerCompany