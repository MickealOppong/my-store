import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../util/util";

export function useDeleteUserCart(id: number) {
  const queryClient = useQueryClient();
  const navigate = useNavigate()


  const { mutate: deleteCart } = useMutation({
    mutationFn: () => customFetch.delete('/cart', {
      params: {
        id
      },
      headers: {
        "Content-Type": 'application/json'
      }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      queryClient.invalidateQueries({ queryKey: ['cartQuantity'] })
      navigate('/cart')
    },
    onError: (err) => {
      console.log(err);
      // setError(() => err.message)
    }
  })



  return { deleteCart }
}