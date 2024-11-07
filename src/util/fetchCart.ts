import { useAppSelector } from "../hooks/hooks";
import { CartDto } from "../types/general";
import { customFetch } from "./util";

export async function fetchCart(): Promise<CartDto[]> {
  const sessionId = localStorage.getItem('_apx.sessionid');
  const username = useAppSelector((state) => state.userSlice.username) ? useAppSelector((state) => state.userSlice.username) : ''
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
    return response.data;
  } catch (err) {
    console.log(err);
    return []
  }
}