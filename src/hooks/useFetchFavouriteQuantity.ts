import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../util/util";
import { useAppSelector } from "./hooks";

export function useFetchFavouriteQuantity() {
  const sessionId = localStorage.getItem('_apx.sessionid') || '';
  const username = useAppSelector((state) => state.userSlice.username)

  async function getFavouriteQuantity(): Promise<number> {
    try {
      const response = await customFetch.get('/fav/count', {
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
    queryKey: ['favQuantity'],
    queryFn: () => getFavouriteQuantity()
  })
  const quantity = response.data;

  return { quantity }

}