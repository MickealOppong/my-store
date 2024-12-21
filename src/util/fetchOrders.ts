import { Order } from "../types/general";
import { customFetch } from "./util";

export async function fetchOrders(username: string, token: string): Promise<Order[]> {

  const response = await customFetch.get('/orders/orderList', {
    params: {
      username,
    },
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json'
    }
  })

  const order: Order[] = response.data;
  return order;
}


