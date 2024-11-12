import { ChangeEvent, useState } from "react";

export function useFormDataNumber(initialValue: string) {

  const [value, setValue] = useState<string>(initialValue);

  const handleInputValueChange = function (e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '0') {
      setValue(() => '1')
    } else {

      setValue(() => e.target.value)
    }

  }

  function handleClickMinusButton() {
    let newValue = parseInt(value) - 1;
    setValue(() => newValue.toString())
  }

  function handleClickPlusButton() {
    let newValue = parseInt(value) + 1;
    setValue(() => newValue.toString())
  }



  return { value, handleClickMinusButton, handleClickPlusButton, handleInputValueChange }
}