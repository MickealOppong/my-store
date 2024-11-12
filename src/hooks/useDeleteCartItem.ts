import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { customFetch } from "../util/util";

export function useDeleteUserCartItem(productId: number, cartId: number) {
  const queryClient = useQueryClient();
  const navigate = useNavigate()


  const { mutate: deleteCartItem } = useMutation({
    mutationFn: () => customFetch.delete('/cart/delete-item', {
      params: {
        cartId,
        productId
      },
      headers: {
        "Content-Type": 'application/json'
      }
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
      queryClient.invalidateQueries({ queryKey: ['cartQuantity'] })
      navigate('/cart')
      // location.reload()
    },
    onError: (err) => {
      console.log(err);
      // setError(() => err.message)
    }
  })




  return { deleteCartItem }
}