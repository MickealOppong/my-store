import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct } from "../../types/TProduct";
import { baseUrl } from "./baseUrl";


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: '/store/products',
      })
    })
  })
})
export const { useGetProductsQuery } = productsApi