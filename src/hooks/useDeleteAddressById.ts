import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { customFetch, getFromLocalStorage } from "../util/util";

export function useDeleteAddressById(id: number) {
  //const queryClient = useQueryClient();
  const navigate = useNavigate()


  const { mutate: deleteAddress } = useMutation({
    mutationFn: () => customFetch.delete(`/address/${id}`, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('uat')}`,
        "Content-Type": 'application/json'
      }
    }),
    onSuccess: () => {
      navigate('/my-account/account-setting')
      // location.reload()
    },
    onError: (err) => {
      console.log(err);
      // setError(() => err.message)
    }
  })




  return { deleteAddress }
}