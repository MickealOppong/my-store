import { UserFavourite } from "../types/general";
import { customFetch } from "./util";

export async function fetchFavourites(username: string, sessionId: string): Promise<UserFavourite> {

  const response = await customFetch.get('/fav', {
    params: {
      username,
      sessionId
    },
    headers: {
      "Content-Type": 'application/json'
    }
  })
  return response.data;
}