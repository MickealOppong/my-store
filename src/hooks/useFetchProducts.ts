import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { SelectedProduct } from "../types/general";
import { customFetch } from "../util/util";


const defaultValue: SelectedProduct[] = [{
  id: 0,
  name: '',
  price: 0.00,
  description: '',
  reducedPrice: 0.00,
  productImages: [''],
  isFavourite: false
}]

export const useFetchProducts = function (url: string) {
  const [products, setProducts] = useState<SelectedProduct[]>(defaultValue);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('')

  const getProducts = async () => {
    setIsLoading(() => true)
    try {
      const response = await customFetch.get(url)
      if (response.status === 200) {
        setIsLoading(() => false)
        setProducts(() => response.data)
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 404) {
          setError(() => "Could not retrieve the requested products")
          setIsLoading(() => false)
        }
      }
      setIsLoading(() => false)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])

  return { products, isLoading, error }

}