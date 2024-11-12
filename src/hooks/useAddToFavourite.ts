import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { customFetch } from "../util/util";

export function useAddToFavourite(productId: number, username: string) {
  const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const { mutate: addProductToFavourite } = useMutation({
    mutationFn: () => customFetch.post('/fav', { productId, username }, {

      headers: {
        "Content-Type": 'multipart/form-data'
      }
    }),
    onSuccess: (response) => {
      setResponse(() => response.data)
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        setError(() => err.response?.data)
      }
    }
  })

  return { addProductToFavourite, response, error }
}