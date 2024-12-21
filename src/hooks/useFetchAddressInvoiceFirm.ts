import { useQuery } from "@tanstack/react-query";
import { InvoiceAddressDto } from "../types/general";
import { customFetch, getFromLocalStorage } from "../util/util";


export function useFetchAddressInvoiceFirm(url: string, id: number) {

  const fetchAddressList = async function (): Promise<InvoiceAddressDto[]> {
    try {
      const response = await customFetch.get(url, {
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`,
          "Content-Type": 'multipart/form-data'
        }
      })
      //setDeliveryAddressList(() => response.data)
      //console.log(response);

      return response?.data;
    } catch (error) {
      //setDeliveryAddressList(() => [])
      console.log(error);
      return [];
    }
  }



  const { data } = useQuery({
    queryKey: ['addressList'],
    queryFn: () => fetchAddressList()
  })


  return { data }

}