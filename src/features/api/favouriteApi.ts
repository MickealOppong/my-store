import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCartParams } from "../../types/TCartParams";
import { TFavouriteDto } from "../../types/TFavouriteDto";
import { TFavParams } from "../../types/TFavParams";
import { baseUrl } from "./baseUrl";


export const favouriteApi = createApi({
  reducerPath: 'favouriteApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 5,
  tagTypes: ['counter', 'favourite'],
  endpoints: (builder) => ({
    getUserFavourite: builder.query<TFavouriteDto, TFavParams>({
      query: ({ userId, token }) => ({
        url: '/fav',
        params: {
          userId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['favourite']
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
      invalidatesTags: ['counter', 'favourite']
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
    deleteItem: builder.mutation<number, TFavParams>({
      query: ({ userId, token, productId }) => ({
        url: '/fav/fav-item',
        params: {
          userId,
          productId
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "DELETE"
      }),
      invalidatesTags: ['counter', 'favourite']
    })
  })

})
export const { useAddToFavouriteMutation, useLazyGetFavQuantityQuery, useLazyIsUserFavouriteQuery, useGetUserFavouriteQuery, useDeleteItemMutation } = favouriteApi