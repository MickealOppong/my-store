import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { customFetch } from "../util/util";
import { useAppSelector } from "./hooks";

export function useAddToCart() {
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const queryClient = useQueryClient();
  const username = useAppSelector((state) => state.userSlice.username)

  const addProductToCart = async (id: number, quantity: number) => {
    const sessionId = localStorage.getItem('_apx.sessionid')

    try {
      const response = await customFetch.post('/cart', { id, quantity, sessionId, username }, {

        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })

      if (response.status === 200) {
        setResponse(() => response.data)
        queryClient.invalidateQueries({ queryKey: ['cartQuantity'] })
        //navigate(`/product/${id}`)
      }
      return;
    } catch (err) {
      console.log(err);

      if (err instanceof AxiosError) {
        setError(() => err.response?.data)
      }
    }
  }

  return { addProductToCart, response, error }
}