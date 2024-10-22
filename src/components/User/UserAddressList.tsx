import { Store } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { DeliveryAddress } from "../../types/general";
import { customFetch, getFromLocalStorage } from "../../util/util";
import UserAddress from "./UserAddress";
export const action = (store: Store) => () => {

}
const UserAddressList = () => {
  const id = useAppSelector((state) => state.userSlice.id)
  const [deliverAddressList, setDeliveryAddressList] = useState<DeliveryAddress[]>([]);

  const fetchAddressList = async function (): Promise<Promise<DeliveryAddress | null>[]> {
    try {
      const response = await customFetch.get(`/address/${id}`, {
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`
        }
      })
      setDeliveryAddressList(() => response.data)
      console.log(response);
      return response.data;
    } catch (error) {
      return [];
    }
  }


  useEffect(() => {
    fetchAddressList()

  })
  return <div>
    <div>
      {
        deliverAddressList.map((address) => {
          return <UserAddress {...address} key={address.id} />
        })
      }
    </div>
  </div>
}
export default UserAddressList