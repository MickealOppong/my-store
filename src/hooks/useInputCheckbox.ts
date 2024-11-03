import { ChangeEvent, useState } from "react";

const useInputCheckbox = function (defaultChecked: boolean) {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setChecked(() => true)
    } else {
      setChecked(() => false)
    }
  }
  return { checked, handleCheck }
}
export default useInputCheckbox