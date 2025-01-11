import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserCart } from "../../types/general";
import { TCartParams } from "../../types/TCartParams";
import { baseUrl } from "./baseUrl";


export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 5,
  tagTypes: ['cart',],
  endpoints: (builder) => ({
    getUserCart: builder.query<UserCart, TCartParams>({
      query: ({ userId, sessionId }) => ({
        url: '/cart',
        params: {
          userId,
          sessionId,
        },
      }),
      providesTags: ['cart']
    }),
    addToCart: builder.mutation<number, TCartParams>({
      query: ({ productId, userId, sessionId, quantity }) => ({
        url: '/cart',
        params: {
          productId,
          userId,
          sessionId,
          quantity
        },
        method: "POST"
      }),
      invalidatesTags: ['cart']
    }),
    updateCartQuantity: builder.mutation<number, TCartParams>({
      query: ({ productId, cartId, quantity }) => ({
        url: '/cart/quantity',
        params: {
          productId,
          cartId,
          quantity
        },
        method: "PATCH"
      }),
      invalidatesTags: ['cart']
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
    getCartQuantity: builder.query<number, TCartParams>({
      query: ({ sessionId, userId }) => ({
        url: '/cart/cart-quantity',
        params: {
          sessionId, userId
        }
      })
    }),
    deleteCartProduct: builder.mutation<number, TCartParams>({
      query: ({ cartId, productId }) => ({
        url: '/cart/delete-item',
        params: {
          cartId,
          productId
        },
        method: 'DELETE'
      }),
      invalidatesTags: ['cart']
    }),
    updateCartLineItemStatus: builder.mutation<boolean, TCartParams>({
      query: ({ cartId, sessionId, productId, includeItem }) => ({
        url: '/cart/change-status',
        params: {
          cartId,
          sessionId,
          productId,
          includeItem
        },
        method: "PATCH",
      }),
      invalidatesTags: ['cart']
    }),
    updateCartStatus: builder.mutation<boolean, TCartParams>({
      query: ({ cartId, includeAllItems }) => ({
        url: '/cart/change-all',
        params: {
          cartId,
          includeAllItems
        },
        method: "PATCH",
      }),
      invalidatesTags: ['cart']
    }),
    deleteCart: builder.mutation<boolean, TCartParams>({
      query: ({ cartId }) => ({
        url: '/cart',
        params: {
          cartId
        },
        method: "DELETE",
      }),
      invalidatesTags: ['cart']
    })
  })

})
export const { useAddToCartMutation, useUpdateCartQuantityMutation, useLazyGetCartQuantityQuery, useDeleteCartProductMutation, useGetUserCartQuery, useUpdateCartStatusMutation, useUpdateCartLineItemStatusMutation, useDeleteCartMutation } = cartApi