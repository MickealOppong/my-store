import { TAddressDto } from "./TAddressDto"

export type TAddressParams = {
  orderId?: number,
  id?: number,
  username?: string,
  userId?: number
  url: string,
  token: string,
  body?: TAddressDto
}