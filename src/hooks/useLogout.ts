import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/userSlice";
import { customFetch, getFromLocalStorage } from "../util/util";

export function useLogout() {
  //const [success, setSuccess] = useState<boolean>(false);
  const accessToken = getFromLocalStorage('uat') as string
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = async function () {
    if (!accessToken) {
      return;
    }
    try {
      await customFetch.delete('/auth/logout', {
        params: {
          accessToken
        },
      })
      dispatch(logoutUser());
      navigate('/')
    } catch (error) {
      console.log(error);

    }
  }

  return [logout] as const
}