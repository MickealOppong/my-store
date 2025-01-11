import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { customFetch } from "../util/util";

export function useFetchSessionId() {

  const [error, setError] = useState<string>('')

  const getSessionId = async () => {
    try {
      const response = await customFetch.post("/session/create")
      if (response.status === 200) {

        sessionStorage.setItem('_apx.sessionid', response.data);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(() => err.response?.data)
      }
    }
  }

  useEffect(() => {
    const session = sessionStorage.getItem('_apx.sessionid');
    if (!session) {
      getSessionId();
    }
  }, [])
  return { error }
}