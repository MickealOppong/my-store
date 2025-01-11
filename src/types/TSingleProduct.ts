type TProductAttribute = {
  attributeName: string,
  attributeValue: string
}
export type TSingleProduct = {
  id: number,
  name: string,
  price: number,
  description: string,
  shippingCost?: number,
  reducedPrice?: number,
  productImages: string[]
  productCategoryList: string[]
  productAttributeDTO: TProductAttribute[],
  isFavourite: boolean
}