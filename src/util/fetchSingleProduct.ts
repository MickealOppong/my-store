import { SingleProductDto } from "../types/general";
import { customFetch } from "./util";

export async function fetchSingleProduct(productId: number): Promise<SingleProductDto | null> {

  try {
    const response = await customFetch.get(`/store/${productId}`, {
      params: {
        productId
      },
      headers: {
        "Content-Type": 'application/json'
      }
    })
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}