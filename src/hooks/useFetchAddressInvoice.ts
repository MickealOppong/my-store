import { useQuery } from "@tanstack/react-query";
import { InvoiceAddressDto } from "../types/general";
import { customFetch, getFromLocalStorage } from "../util/util";


export function useFetchAddressInvoice(url: string, id: number) {

  const { data, error } = useQuery({
    queryKey: ['addressList'],
    queryFn: () => fetchAddress(),
    refetchOnMount: true
  })

  async function fetchAddress() {
    const response = await customFetch.get(url, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('uat')}`,
        "Content-Type": 'multipart/form-data'
      }
    })
    const data: InvoiceAddressDto[] = response.data;
    return data;
  }
  return { data, error }

}