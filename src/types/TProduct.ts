
export type TProduct = {
  id: number,
  name: string,
  price: number,
  description: string,
  shippingCost?: number,
  reducedPrice?: number,
  productImages: string[],
}