
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AddressDto, DeliveryAddressDto } from '../../types/general';
import { TAccount } from '../../types/TAccount';
import { TUser } from "../../types/TUser";
import { getFromLocalStorage } from '../../util/util';
import { baseUrl } from './baseUrl';



export const userApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query<TUser, string>({
      query: (username) => ({
        url: `/users/${username}`,
        params: {
          username
        }
      }),
    }),
    createUser: builder.mutation<String, Partial<TAccount>>({
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
      transformResponse: (response: { data: string }, meta, arg) => response.data,
    }),
    createDeliveryAddress: builder.mutation<void, Partial<DeliveryAddressDto>>({
      query: ({ id, ...body }) => {

        return {
          url: '/address/delivery-address',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        }
      }
    }),
    getAddress: builder.query<AddressDto[], string>({
      query: (url) => ({
        url,
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`
        }
      })
    }),
  })

})

export const { useGetUserQuery, useCreateUserMutation, useGetAddressQuery } = userApi