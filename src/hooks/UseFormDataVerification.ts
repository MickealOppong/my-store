import { ChangeEvent, useState } from "react";

export function useFormDataVerification(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)

  }


  return { value, handleChange } as const
}

export default useFormDataVerification