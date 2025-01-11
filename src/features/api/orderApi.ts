import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TCourier } from "../../types/TCourier";
import { TOrderParams } from "../../types/TOrderParams";
import { TPaymentMethodParams } from "../../types/TPaymentMethodParams";
import { TPaymentOptions } from "../../types/TPaymentOptions";
import { TUpdateCourierParams } from "../../types/TUpdateCourierParams";
import { TUserOrder } from "../../types/TUserOrder";
import { baseUrl } from "./baseUrl";


export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 5,
  tagTypes: ['order',],
  endpoints: (builder) => ({
    createOrder: builder.mutation<number, TOrderParams>({
      query: ({ userId, token }) => ({
        url: '/orders/create-order',
        params: {
          userId
        },
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['order']
    }),
    getOrder: builder.query<TUserOrder, TOrderParams>({
      query: ({ url, userId, token, isCompleted }) => ({
        url,
        params: {
          userId,
          isCompleted
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['order']
    }),
    getCourierList: builder.query<TCourier[], void>({
      query: () => '/courier'
    }),
    getPaymentList: builder.query<TPaymentOptions[], void>({
      query: () => '/payment-method'
    }),
    updateCourier: builder.mutation<void, TUpdateCourierParams>({
      query: ({ token, orderId, courier }) => ({
        url: 'orders/change-courier',
        params: {
          orderId,
          courier
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
      }),
      invalidatesTags: ["order"]
    }),
    updatePaymentMethod: builder.mutation<void, TPaymentMethodParams>({
      query: ({ token, orderId, paymentMethod }) => ({
        url: 'orders/change-payment',
        params: {
          orderId,
          paymentMethod
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
      }),
      invalidatesTags: ["order"]
    }),
    updateOrderStatus: builder.mutation<void, TOrderParams>({
      query: ({ token, url, userId, isCompleted }) => ({
        url,
        params: {
          userId,
          isCompleted
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'PATCH',
      }),
      invalidatesTags: ["order"]
    }),
  })

})
export const { useCreateOrderMutation, useGetOrderQuery, useGetCourierListQuery, useGetPaymentListQuery, useUpdateCourierMutation, useUpdatePaymentMethodMutation, useUpdateOrderStatusMutation } = orderApi