import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { AttributeDTO } from "../types/general";
import { customFetch } from "../util/util";




export const useFetchProductAttributes = function (productName: string) {
  const [attributes, setAttributes] = useState<AttributeDTO[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('')

  const getAttributesByName = async () => {
    setIsLoading(() => true)
    try {
      const response = await customFetch.get('/store/item', {
        params: {
          productName
        }
      })

      if (response.status === 200) {
        setIsLoading(() => false)
        setAttributes(() => response.data)
      }
    } catch (err) {
      console.log(err);

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
    getAttributesByName()
  }, [productName])

  return { attributes, isLoading, error }

}