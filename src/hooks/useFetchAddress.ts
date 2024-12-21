import { useQuery } from "@tanstack/react-query";
import { DeliveryAddressDto } from "../types/general";
import { customFetch, getFromLocalStorage } from "../util/util";


export function useFetchAddress(url: string, id: number) {

  const { data, error } = useQuery({
    queryKey: ['addresssList'],
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
    const data: DeliveryAddressDto[] = response.data;
    return data;
  }
  return { data, error }

}