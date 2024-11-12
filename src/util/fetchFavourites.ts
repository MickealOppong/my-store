import { UserFavourite } from "../types/general";
import { customFetch } from "./util";

export async function fetchFavourites(username: string, sessionId: string): Promise<UserFavourite | null> {

  try {
    const response = await customFetch.get('/fav', {
      params: {
        username,
        sessionId
      },
      headers: {
        "Content-Type": 'application/json'
      }
    })
    if (response.data === null) {
      return {
        id: -1,
        favouriteList: []
      }
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return null
  }
}