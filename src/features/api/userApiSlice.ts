
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AddressDto, DeliveryAddressDto } from '../../types/general';
import { TAccount } from '../../types/TAccount';
import { TAddressDto } from '../../types/TAddressDto';
import { TAddressParams } from '../../types/TAddressParams';
import { TDeliveryAddressDto } from '../../types/TDeliveryAddressDto';
import { TEditNameParams } from '../../types/TEditNameParams';
import { TInvoiceAddressDto } from '../../types/TInvoiceAddressDto';
import { TLoginParams } from '../../types/TLoginParams';
import { TParams } from '../../types/TParams';
import { TUser } from "../../types/TUser";
import { TUsernameParams } from '../../types/TUsernameParams';
import { TUserParams } from '../../types/TUserParams';
import { baseUrl } from './baseUrl';


export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  keepUnusedDataFor: 5,
  tagTypes: ['address', 'user'],
  endpoints: (builder) => ({
    getUser: builder.query<TUser, TUserParams>({
      query: ({ username, token }) => ({
        url: `/users/${username}`,
        params: {
          username
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
      }),
      providesTags: ['user']
    }),
    login: builder.mutation<String, TLoginParams>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      }),
    }),
    createUser: builder.mutation<String, TAccount>({
      query: (body) => {

        return {
          url: '/users/user',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        }
      },
    }),
    getAddress: builder.query<AddressDto[], TAddressParams>({
      query: ({ userId, url, token }) => ({
        url: url,
        method: "GET",
        params: { userId },
        headers: {
          Authorization: `Bearer ${token}`
        },
      }),
      providesTags: ['address']
    }),
    getSingleAddress: builder.query<AddressDto, TAddressParams>({
      query: ({ id, url, token }) => ({
        url: url,
        method: "GET",
        params: { id },
        headers: {
          Authorization: `Bearer ${token}`
        },
      }),
      providesTags: ['address']
    }),
    invoiceAddress: builder.mutation<TInvoiceAddressDto, TInvoiceAddressDto & TAddressParams>({
      query: ({ url, token, userId, orderId, ...body }) => ({
        url: url,
        method: "POST",
        params: { userId, orderId },
        headers: {
          Authorization: `Bearer ${token}`
        },
        body
      }),
      invalidatesTags: ['address']
    }),
    deliveryAddress: builder.mutation<TDeliveryAddressDto, TDeliveryAddressDto & TAddressParams>({
      query: ({ url, token, orderId, userId, ...body }) => ({
        url: url,
        method: "POST",
        params: { userId, orderId },
        headers: {
          Authorization: `Bearer ${token}`
        },
        body
      }),
      invalidatesTags: ['address']
    }),
    editAddress: builder.mutation<TAddressDto, TAddressParams>({
      query: ({ url, id, token, body }) => ({
        url,
        method: "PATCH",
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${token}`
        },
        body
      }),
      invalidatesTags: ['address']
    }),
    deleteAddress: builder.mutation<void, TAddressParams>({
      query: ({ url, id, token }) => ({
        url,
        method: "DELETE",
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      }),
      invalidatesTags: ['address']
    }),
    editInvoiceAddress: builder.mutation<TInvoiceAddressDto, TInvoiceAddressDto & TAddressParams>({
      query: ({ url, token, username, ...body }) => ({
        url: url,
        method: "PUT",
        params: { username },
        headers: {
          Authorization: `Bearer ${token}`
        },
        body
      }),
      invalidatesTags: ['address']
    }),
    editDeliveryAddress: builder.mutation<DeliveryAddressDto, DeliveryAddressDto & TAddressParams>({
      query: ({ url, token, id, ...body }) => ({
        url: url,
        method: "PUT",
        params: { id },
        headers: {
          Authorization: `Bearer ${token}`
        },
        body
      }),
      invalidatesTags: ['address']
    }),
    addTelephone: builder.mutation<string, TParams>({
      query: ({ id, url, token, ...patch }) => ({
        url,
        params: {
          id
        },
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        },
        body: patch
      })
    }),
    editName: builder.mutation<boolean, TEditNameParams>({
      query: ({ id, url, token, ...patch }) => ({
        url: `${url}${id}`,
        params: {
          id,
        },
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        },
        body: patch
      }),
      invalidatesTags: ['user']
    }),
    editUsername: builder.mutation<TUser, TUsernameParams>({
      query: ({ id, token, ...patch }) => ({
        url: `/users/edit-username/${id}`,
        params: {
          id
        },
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: patch
      }),
      invalidatesTags: ['user']
    }),
    changePassword: builder.mutation<string, TParams>({
      query: ({ id, url, token, ...body }) => ({
        url: `${url}/${id}`,
        params: {
          id
        },
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": 'application/json'
        },
        body
      })
    }),

  }),


})

export const { useGetUserQuery, useCreateUserMutation, useGetAddressQuery, useAddTelephoneMutation, useLoginMutation, useDeliveryAddressMutation, useEditDeliveryAddressMutation, useEditInvoiceAddressMutation, useInvoiceAddressMutation, useEditNameMutation, useEditUsernameMutation, useGetSingleAddressQuery, useEditAddressMutation, useLazyGetSingleAddressQuery, useDeleteAddressMutation } = userApi