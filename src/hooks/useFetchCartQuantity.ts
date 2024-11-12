import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../util/util";
import { useAppSelector } from "./hooks";

export function useFetchCartQuantity() {
  const sessionId = localStorage.getItem('_apx.sessionid') || '';
  const username = useAppSelector((state) => state.userSlice.username)

  async function getCartQuantity(): Promise<number> {
    try {
      const response = await customFetch.get('/cart/cartQuantity', {
        params: {
          username,
          sessionId
        },
        headers: {
          "Content-Type": 'application/json'
        }
      })
      return response.data
    } catch (error) {
      console.log(error);
      return 0
    }
  }

  const response = useQuery({
    queryKey: ['cartQuantity'],
    queryFn: () => getCartQuantity()
  })
  const quantity = response.data;

  return { quantity }

}