import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { customFetch } from "../util/util";

export function useSession() {
  const [sessionId, setSessionId] = useState<string>('')
  const [error, setError] = useState<string>('')

  const getSessionId = async () => {
    try {
      const response = await customFetch.post("/session/create")
      console.log(response);
      if (response.status === 200) {
        setSessionId(() => response.data)
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(() => err.response?.data)
      }
    }
  }

  useEffect(() => {
    getSessionId();
  }, [])

  return { sessionId, error }
}
