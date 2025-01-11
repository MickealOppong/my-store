
type TFavouriteList = {
  id: number,
  productId: number,
  productName: string,
  price: number,
  productImage: string,
}
export type TFavouriteDto = {
  id: number,
  favouriteList: TFavouriteList[]
}