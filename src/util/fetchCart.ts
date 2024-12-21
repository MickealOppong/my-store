import { UserCart } from "../types/general";
import { customFetch } from "./util";

export async function fetchCart(username: string, sessionId: string): Promise<UserCart | null> {
  try {
    const response = await customFetch.get('/cart', {
      params: {
        username,
        sessionId
      },
      headers: {
        "Content-Type": 'application/json'
      }
    })
    if (response.data === null) {
      return {
        id: -1,
        includeAllItems: false,
        cartList: []
      }
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return null
  }
}