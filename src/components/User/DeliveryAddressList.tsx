import { useGetAddressQuery } from "../../features/api/userApiSlice";
import { useAppSelector } from "../../hooks/hooks";
import DeliveryAddress from "./DeliveryAddress";



const UserAddressList = () => {
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const userId = useAppSelector((state) => state.userSlice.id)

  const params = {
    userId,
    token,
    url: '/address/delivery'
  }

  const { data, isError, isLoading } = useGetAddressQuery(params)

  if (isError) {
    return <div>
      <p>Could not retrieve data</p>
    </div>
  }
  if (isLoading) {
    return <div>
      <p>Loading...</p>
    </div>
  }
  return <div>
    <div>
      {
        data?.map((address, index) => {
          return <DeliveryAddress {...address} key={index} />
        })
      }
    </div>
  </div>
}
export default UserAddressList