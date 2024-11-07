import { AxiosError } from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearInvalidation } from "../features/cartSlice";
import { CartDto } from "../types/general";
import { customFetch } from "../util/util";
import { useAppSelector } from "./hooks";



export function useFetchCart() {
  const [cartList, setCartList] = useState<CartDto[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const dispatch = useDispatch()
  const isInvalidated = useAppSelector((state) => state.cart.isInvalidated)

  const username = useAppSelector((state) => state.userSlice.username) ? useAppSelector((state) => state.userSlice.username) : ''
  const sessionId = localStorage.getItem('_apx.sessionid');


  const getCartByUser = async () => {

    setIsLoading(() => true)
    try {
      const response = await customFetch.get('/cart', {
        params: {
          username,
          sessionId
        },
        headers: {
          "Content-Type": 'application/json'
        }
      })

      if (response.status === 200) {
        setCartList(() => response.data)
        setIsLoading(() => false)
        dispatch(clearInvalidation())
      }
      return;
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        setError(() => err.response?.data)
        setIsLoading(() => false)
      }
    }
    setIsLoading(() => false)
  }




  return { cartList, isLoading, error, getCartByUser }
}