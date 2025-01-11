import { TAddressDto } from "./TAddressDto";

export type OrderLines = {
  productName: string,
  quantity: number,
  price: number,
  productImage: string,
  productId: number
}
export type TUserOrder = {
  id: number,
  username: string,
  courier: string;
  courierCost: number,
  completed: boolean,
  paid: boolean,
  orderDate: string,
  deliveryDate: string,
  delivered: boolean,
  shipped: boolean,
  paymentMethod: string,
  orderTotal: number,
  orderLineItems: OrderLines[],
  orderDeliveryAddress: TAddressDto,
  orderInvoiceAddress: TAddressDto
}