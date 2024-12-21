import { Order } from "../types/general";
import { customFetch, getFromLocalStorage } from "./util";

export async function fetchOrder(orderId: number): Promise<Order[]> {
  const response = await customFetch.get('/orders/order', {
    params: {
      orderId
    },
    headers: {
      Authorization: `Bearer ${getFromLocalStorage('uat')}`,
      "Content-Type": 'application/json'
    }
  })
  const order: Order[] = response.data;
  return order;
}