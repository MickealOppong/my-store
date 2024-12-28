import { ChangeEvent, useState } from "react";

export function useFormDataPassword(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>('');

  //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  const regex = '/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/'


  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.match(regex)) {
      setErrorMessage(() => '')
    } else if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    } else {
      setErrorMessage(() => '')
    }
  }



  return { value, errorMessage, handleChange, setErrorMessage } as const
}

export default useFormDataPassword