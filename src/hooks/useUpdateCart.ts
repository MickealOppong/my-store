import { AxiosError } from "axios";
import { useState } from "react";
import { CartDto } from "../types/general";
import { customFetch } from "../util/util";

export function useUpdateCart() {
  const [response, setResponse] = useState<CartDto>()
  const [error, setError] = useState<string>('')


  const updateCart = async (id: number, productId: number, quantity: number) => {

    try {
      const response = await customFetch.patch('/cart/quantity', { productId, quantity }, {
        params: {
          id
        },
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })

      if (response.status === 200) {
        setResponse(() => response.data)
      }
    } catch (err) {
      console.log(err);

      if (err instanceof AxiosError) {
        setError(() => err.response?.data)
      }
    }
  }

  return { updateCart, response, error }
}