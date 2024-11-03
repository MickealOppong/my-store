import { AxiosError } from "axios";
import { useState } from "react";
import { customFetch } from "../util/util";

export function useAddToCart() {
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')

  const addProductToCart = async (id: number, quantity: number) => {

    try {
      const response = await customFetch.post('/cart', { id, quantity }, {

        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })

      if (response.status === 200) {
        setResponse(() => response.data)
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