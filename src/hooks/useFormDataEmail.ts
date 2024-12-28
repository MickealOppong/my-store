import { ChangeEvent, useEffect, useState } from "react";

export function useFormDataEmail(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const regex = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.match(regex)) {
      setErrorMessage(() => '')
    } else if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    } else if (!e.target.value.match(regex)) {
      setErrorMessage(() => 'Please provide a valid email')
    }
  }

  useEffect(() => {

    if (value.length > 0 && !value.match(regex)) {
      setErrorMessage(() => 'Please provide a valid email')
    }

  }, [value])


  return { value, errorMessage, handleChange, setErrorMessage } as const
}

export default useFormDataEmail