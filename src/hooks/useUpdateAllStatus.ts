import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { invalidateFetch } from "../features/cartSlice";
import { customFetch } from "../util/util";

export function useUpdateAllStatus() {
  const [includeAll, setIncludeInCart] = useState<boolean>(true)
  const dispatch = useDispatch()
  const updateCartStatus = async () => {
    const sessionId = localStorage.getItem('_apx.sessionid')
    try {
      const response = await customFetch.patch('/cart/change-all', { sessionId, includeAll }, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })
      if (response.status === 200) {
        dispatch(invalidateFetch())
      }

    } catch (err) {
      console.log(err);
    }
  }

  const handleAllClick = () => {
    setIncludeInCart(() => !includeAll)
  }

  useEffect(() => {
    updateCartStatus()
  }, [includeAll])

  return { includeAll, handleAllClick }
}