import { useMutation } from "@tanstack/react-query";
import { DeliveryAddressDto, InvoiceAddressDto } from "../types/general";
import { customFetch, getFromLocalStorage } from "../util/util";

export function useUpdateOrderAddress(url: string) {

  const { mutateAsync: updateAddress } = useMutation({
    mutationFn: (id: number) => updateData(id),
    onSuccess: (response) => {
      return response
    },
    onError: (error) => {
      console.log(error);
    }
  })

  async function updateData(id: number): Promise<DeliveryAddressDto | InvoiceAddressDto> {
    const response = await customFetch.put(url, { id }, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('uat')}`,
        "Content-type": 'multipart/form-data'
      }
    })
    const data: InvoiceAddressDto | DeliveryAddressDto = response.data;
    return data
  }
  return { updateAddress }
}