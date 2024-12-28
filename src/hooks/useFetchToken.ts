import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";
import { customFetch } from "../util/util";

export function useFetchToken() {
  const dispatch = useDispatch()
  async function getToken(accessToken: string): Promise<void> {

    try {
      const response = await customFetch.post('/auth/refresh-token', { accessToken }, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      dispatch(loginUser(response.data))
    } catch (error) {
      console.log(error);
    }
  }
  return { getToken }
}
