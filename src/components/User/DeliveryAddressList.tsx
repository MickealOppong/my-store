import { useLoaderData } from "react-router-dom";
import { UserResponseData } from "../../types/general";
import DeliveryAddress from "./DeliveryAddress";



const UserAddressList = () => {

  const { deliveryAddressList } = useLoaderData() as UserResponseData

  return <div>
    <div>
      {
        deliveryAddressList?.map((address) => {
          return <DeliveryAddress {...address} key={address.id} />
        })
      }
    </div>
  </div>
}
export default UserAddressList