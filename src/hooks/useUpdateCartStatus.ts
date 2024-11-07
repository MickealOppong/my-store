import { useState } from "react";
import { customFetch } from "../util/util";

export function useUpdateCartStatus(id: number, productId: number, include: boolean) {
  const [includeInCart, setIncludeInCart] = useState<boolean>(include)

  const updateCartStatus = async () => {

    try {
      const response = await customFetch.patch('/cart/change-status', { productId, includeInCart }, {
        params: {
          id
        },
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      })

    } catch (err) {
      console.log(err);
    }

  }


  const handleClick = () => {
    if (includeInCart) {
      setIncludeInCart(() => false)
    } else {
      setIncludeInCart(() => true)
    }
  }



  return { includeInCart, handleClick }
}