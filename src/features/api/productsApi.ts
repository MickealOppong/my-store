import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AttributeDTO } from "../../types/general";
import { TCartParams } from "../../types/TCartParams";
import { TFavParams } from "../../types/TFavParams";
import { TProduct } from "../../types/TProduct";
import { TSingleProduct } from "../../types/TSingleProduct";
import { baseUrl } from "./baseUrl";


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 5,
  tagTypes: ['products', 'product', 'counter', 'cart',],
  endpoints: (builder) => ({
    getProducts: builder.query<TProduct[], void>({
      query: () => ({
        url: '/store/products',

      })
    }),
    getProduct: builder.query<TSingleProduct, number>({
      query: (id) => ({
        url: `/store/${id}`,
        params: {
          id
        }
      }),

    }),
    addToFavourite: builder.mutation<number, TFavParams>({
      query: ({ productId, userId, token }) => ({
        url: `/fav/${productId}`,
        params: {
          productId,
          userId
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST"
      }),
      invalidatesTags: ['counter']
    }),
    deleteUserCart: builder.mutation<number, TCartParams>({
      query: ({ userId, sessionId }) => ({
        url: '/cart',
        params: {
          userId,
          sessionId
        }
      })
    }),
    getFavQuantity: builder.query<number, TCartParams>({
      query: ({ userId }) => ({
        url: '/fav/count',
        params: {
          userId
        }
      })
    }),
    isUserFavourite: builder.query<boolean, TFavParams>({
      query: ({ userId, token, productId }) => ({
        url: '/fav/fav-check',
        params: {
          userId,
          productId
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    }),
    getProductAttributes: builder.query<AttributeDTO[], string>({
      query: (productName) => ({
        url: '/store/item',
        params: {
          productName
        }
      }),
      providesTags: ['product']
    })
  })

})
export const { useGetProductsQuery, useGetProductQuery, useAddToFavouriteMutation, useLazyGetFavQuantityQuery, useLazyIsUserFavouriteQuery, useGetProductAttributesQuery } = productsApi