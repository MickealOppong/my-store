import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SingleProductDto } from "../../types/general";
import { TProduct } from "../../types/TProduct";
import { TProductParam } from "../../types/TProductParam";
import { baseUrl } from "./baseUrl";


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 5,
  tagTypes: ['products', 'product'],
  endpoints: (builder) => ({
    getProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: '/store/products',
      })
    }),
    getProduct: builder.query<SingleProductDto, TProductParam>({
      query: ({ id, }) => ({
        url: `/store/${id}`,
        params: {
          id
        }
      })
    }),
  })
})
export const { useGetProductsQuery, useGetProductQuery, } = productsApi