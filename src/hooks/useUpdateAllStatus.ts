import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../util/util";

export function useUpdateAllStatus(initialValue: boolean) {
  const [includeAllItems, setIncludeAllItems] = useState<boolean>(initialValue)
  const queryClient = useQueryClient();
  const sessionId = localStorage.getItem('_apx.sessionid') || ''


  const navigate = useNavigate()
  const { mutate: updateCartStatus } = useMutation({
    mutationFn: () => customFetch.patch('/cart/change-all', { sessionId, includeAllItems }, {
      headers: {
        "Content-Type": 'multipart/form-data'
      }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      navigate('/cart')
    },
    onError: (err) => {
      console.log(err);
    }
  })



  const handleAllClick = () => {
    setIncludeAllItems(() => !includeAllItems)
    updateCartStatus()
  }



  return { handleAllClick, includeAllItems }
}