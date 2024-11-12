import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../util/util";

export function useDeleteFavouriteItem(productId: number, username: string) {
  // const [response, setResponse] = useState<string>('')
  const [error, setError] = useState<string>('')
  const queryClient = useQueryClient();
  const navigate = useNavigate();


  const { mutate: removeFavourite } = useMutation({
    mutationFn: () => customFetch.post('/fav', { productId, username }, {

      headers: {
        "Content-Type": 'multipart/form-data'
      }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favourites'] })
      navigate('/my-account/ulubione')
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        setError(() => err.response?.data)
      }
    }
  })

  return { removeFavourite, error }
}