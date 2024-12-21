import { CourierDto } from "../types/general";
import { customFetch, getFromLocalStorage } from "./util";

export async function fetchCourier(): Promise<CourierDto[]> {
  const response = await customFetch.get('/courier', {

    headers: {
      Authorization: `Bearer ${getFromLocalStorage('uat')}`,
      "Content-Type": 'multipart/form-data'
    }
  })
  const courierList: CourierDto[] = response.data;
  return courierList
}