import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartDto } from "../types/general";
import { customFetch } from "../util/util";

export function useUpdateCart() {
  const [response, setResponse] = useState<CartDto>()
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const queryClient = useQueryClient();
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
        queryClient.invalidateQueries({ queryKey: ['cartQuantity'] })
        navigate('/cart')
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