import { AddressDto } from "../types/general";
import { customFetch } from "./util";

export async function fetchAddress(url: string, id: number, token: string): Promise<AddressDto[]> {
  const response = await customFetch.get(url, {
    params: {
      id
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'multipart/form-data'
    }
  })
  const address: AddressDto[] = response.data;
  return address;
}