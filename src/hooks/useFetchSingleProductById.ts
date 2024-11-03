import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { SingleProduct } from "../types/general";
import { customFetch } from "../util/util";


const defaultValue: SingleProduct = {
  id: 1,
  name: '',
  price: 0.00,
  description: '',
  reducedPrice: 0.00,
  productImages: [''],
  productCategoryList: [],
  productAttributeDTO: [
    {
      attributeName: '',
      attributeValue: ''
    }
  ]
}

export const useFetchSingleProductById = function (productId: number, url: string) {
  const [singleProduct, setSingleProduct] = useState<SingleProduct>(defaultValue);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('')

  const getDataById = async () => {
    setIsLoading(() => true)
    try {
      const response = await customFetch.get(`${url}/${productId}`, {
        params: {
          productId
        }
      })

      if (response.status === 200) {
        setIsLoading(() => false)
        setSingleProduct(() => response.data)
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 404) {
          setError(() => "Could not retrieve the requested product")
          setIsLoading(() => false)
        }
      }
      setIsLoading(() => false)
    }
  }
  useEffect(() => {
    getDataById()
  }, [productId])

  return { singleProduct, isLoading, error }

}