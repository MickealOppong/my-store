import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../util/util";

export function useUpdateCartStatus(id: number, productId: number, initialValue: boolean) {
  const [includeItem, setIncludeItem] = useState<boolean>(initialValue)
  const [error, setError] = useState<string>('')
  const sessionId = localStorage.getItem('_apx.sessionid') || ''
  const queryClient = useQueryClient();
  const navigate = useNavigate()


  const handleClick = () => {
    setIncludeItem(() => !includeItem)
    updateCartStatus()
  }


  const { mutate: updateCartStatus } = useMutation({
    mutationFn: () => customFetch.patch('/cart/change-status', { sessionId, productId, includeItem }, {
      params: {
        id
      },
      headers: {
        "Content-Type": 'multipart/form-data'
      }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      navigate('/cart')
    },
    onError: (err) => {
      //console.log(err);
      setError(() => err.message)
    }
  })




  return { handleClick, includeItem, error }
}