import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { invalidateFetch } from "../features/cartSlice";

export function useFormDataNumber(initialValue: number) {

  const [value, setValue] = useState<string>(initialValue.toString());

  const dispatch = useDispatch()
  const handleInputValueChange = function (e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '0') {
      setValue(() => '1')
    } else {

      setValue(() => e.target.value)
    }

  }

  function handleFocusEvent(e: React.FocusEvent<HTMLInputElement, Element>) {
    setValue(() => e.target.value)
    dispatch(invalidateFetch())
  }

  function handleClickMinusButton() {
    let newValue = parseInt(value) - 1;
    setValue(() => newValue.toString())
  }

  function handleClickPlusButton() {
    let newValue = parseInt(value) + 1;
    setValue(() => newValue.toString())
  }



  return { value, handleClickMinusButton, handleClickPlusButton, handleInputValueChange, handleFocusEvent }
}