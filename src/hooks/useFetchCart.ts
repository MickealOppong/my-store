import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { CartDto } from "../types/general";
import { customFetch } from "../util/util";



export function useFetchCart() {
  const [response, setResponse] = useState<CartDto[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const username = 'guest@mail.com'

  const getCartByUser = async () => {
    setIsLoading(() => true)
    try {
      const response = await customFetch.get('/cart', {
        params: {
          username
        }
      })
      if (response.status === 200) {
        setResponse(() => response.data)
        setIsLoading(() => false)
      }
      return;
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        setError(() => err.response?.data)
        setIsLoading(() => false)
      }
    }
    setIsLoading(() => false)
  }

  useEffect(() => {
    getCartByUser()
  }, [])

  return { response, isLoading, error }
}