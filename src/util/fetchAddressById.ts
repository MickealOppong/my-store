
import { AddressDto } from "../types/general";
import { customFetch } from "./util";

export async function fetchAddressById(id: number, token: string): Promise<AddressDto> {

  const response = await customFetch.get(`/address/${id}`, {
    params: {
      id
    },
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })


  return response.data;
}

