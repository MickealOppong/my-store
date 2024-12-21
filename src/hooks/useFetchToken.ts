import { TUser } from "../types/TUser";
import { customFetch, saveToLocalStorage } from "../util/util";

export function useFetchToken() {
  //const [data, setData] = useState<TUser>()


  async function getToken(accessToken: string): Promise<TUser | null> {

    try {
      const response = await customFetch.post('/auth/refresh-token', { accessToken }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      saveToLocalStorage('uat', response.data?.accessToken)
      console.log(response.data);
      return response.data
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  return { getToken }
}
