import { useDispatch } from "react-redux";
import { updateToken } from "../features/userSlice";
import { customFetch, getFromLocalStorage } from "./util";
const dispatch = useDispatch()
export async function getNewToken() {
  const accessToken = getFromLocalStorage('uat') as string
  try {
    const response = await customFetch.post('/auth/refresh-token', { accessToken }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    dispatch(updateToken(response.data))
    console.log(response.data);

  } catch (error) {
    console.log(error);
  }

}
window.addEventListener('load', () => {
  console.log('loading');

})