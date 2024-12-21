import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { customFetch, getFromLocalStorage } from "../util/util";

export function useChangeOrderStatus(orderId: number, username: string) {
  //const queryClient = useQueryClient();
  const navigate = useNavigate()


  const { mutate: changeStatus } = useMutation({
    mutationFn: () => customFetch.patch(`/orders/change-status/${orderId}`, { orderId, username }, {
      params: {
        orderId
      },
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('uat')}`,
        "Content-Type": 'multipart/form-data'
      }
    }),
    onSuccess: (res) => {
      console.log(res);

      navigate('/cart/summary')
      // location.reload()
    },
    onError: (err) => {
      console.log(err);
      // setError(() => err.message)
    }
  })




  return { changeStatus }
}