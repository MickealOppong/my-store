import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { SingleProduct } from "../types/general";
import { customFetch } from "../util/util";

/*
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
*/
export const useFetchSingleProductById = function (productId: number, url: string) {

  const getDataById = async (): Promise<SingleProduct[]> => {
    const response = await customFetch.get(`${url}/${productId}`, {
      params: {
        productId
      }
    })
    return response.data;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['single', productId],
    queryFn: () => getDataById()
  })
  useEffect(() => {
    getDataById()
  }, [productId])

  return { data, isLoading, error };


}