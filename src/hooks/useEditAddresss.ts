import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { DeliveryAddressDto, InvoiceAddressDto } from "../types/general";
import { customFetch, getFromLocalStorage } from "../util/util";


export function useEditAddress() {

  const queryClient = useQueryClient();
  const navigate = useNavigate()

  const { mutate: editAddress } = useMutation({
    mutationFn: (data: DeliveryAddressDto | InvoiceAddressDto) => updateAddress(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['address'] })
      navigate('/my-account/account-setting')
    },
    onError: (err) => {
      console.log(err);
    }
  })

  async function updateAddress(data: DeliveryAddressDto | InvoiceAddressDto) {
    const {
      orderId,
      id,
      firstName,
      lastName,
      houseNumber,
      apartmentNumber,
      city, street,
      companyName,
      postCode,
      telephone
    } = data
    const response = await customFetch.patch(`/address/edit/${id}`, {
      orderId,
      id,
      firstName,
      lastName,
      houseNumber,
      apartmentNumber,
      city, street,
      companyName,
      postCode,
      telephone
    }, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('uat')}`,
        "Content-Type": 'multipart/form-data'
      }
    })
    return response.data;
  }

  return { editAddress }

}