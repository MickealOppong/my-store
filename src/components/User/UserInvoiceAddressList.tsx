import { Store } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { DeliveryAddress } from "../../types/general";
import { customFetch, getFromLocalStorage } from "../../util/util";
import UserInvoiceAddress from "./UserInvoiceAddress";
export const action = (store: Store) => () => {

}
const UserInvoiceAddressList = () => {
  const id = useAppSelector((state) => state.userSlice.id)
  const [invoiceAddressList, setInvoiceAddressList] = useState<DeliveryAddress[]>([]);

  const fetchInvoiceAddressList = async function (): Promise<Promise<DeliveryAddress | null>[]> {
    try {
      const response = await customFetch.get(`/address/${id}`, {
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`
        }
      })
      setInvoiceAddressList(() => response.data)
      console.log(response);
      return response.data;
    } catch (error) {
      return [];
    }
  }


  useEffect(() => {
    fetchInvoiceAddressList()

  })
  return <div>
    <div>
      {
        invoiceAddressList.map((address) => {
          return <UserInvoiceAddress {...address} key={address.id} />
        })
      }
    </div>
  </div>
}
export default UserInvoiceAddressList