import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { DeliveryAddress, InvoiceAddress } from "../../types/general";
import { customFetch, getFromLocalStorage } from "../../util/util";
import UserInvoiceAddress from "./UserInvoiceAddress";
import UserInvoiceCompanyAddress from "./UserInvoiceCompanyAddress";

const UserInvoiceAddressList = () => {
  const id = useAppSelector((state) => state.userSlice.id)
  const [invoicePersonAddressList, setInvoicePersonAddressList] = useState<DeliveryAddress[]>([]);
  const [invoiceCompanyAddressList, setInvoiceCompanyAddressList] = useState<InvoiceAddress[]>([]);

  const fetchInvoicePersonAddressList = async function (): Promise<Promise<DeliveryAddress | null>[]> {
    try {
      const response = await customFetch.get(`/address/invoice/person/${id}`, {
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`
        }
      })
      setInvoicePersonAddressList(() => response.data)
      return response.data;
    } catch (error) {
      return [];
    }
  }

  const fetchInvoiceCompanyAddressList = async function (): Promise<Promise<InvoiceAddress | null>[]> {
    try {
      const response = await customFetch.get(`/address/invoice/company/${id}`, {
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`
        }
      })
      setInvoiceCompanyAddressList(() => response.data)
      return response.data;
    } catch (error) {
      return [];
    }
  }

  useEffect(() => {
    fetchInvoicePersonAddressList()
    fetchInvoiceCompanyAddressList()
  }, [])
  return <div>
    <div>
      {
        invoicePersonAddressList.map((address) => {
          return <UserInvoiceAddress {...address} key={address.id} />
        })
      }
    </div>
    <div>
      {
        invoiceCompanyAddressList.map((address) => {
          return <UserInvoiceCompanyAddress {...address} key={address.id} />
        })
      }
    </div>
  </div>
}
export default UserInvoiceAddressList