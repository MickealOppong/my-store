import { useState } from "react";
import { customFetch } from "../util/util";

export function useFetchIsFavourite(username: string, productId: number) {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  async function checkIsFavourite() {
    try {
      const response = await customFetch.get('/fav/fav-item', {
        params: {
          username,
          productId
        },
        headers: {
          "Content-Type": 'application/json'
        }
      })
      setIsFavourite(() => response.data)
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  return { checkIsFavourite, isFavourite }

}