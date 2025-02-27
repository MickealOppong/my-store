import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

//
export function customHook(defaultValue: string) {
  const [item, setItem] = useState<string>('');
  setItem(() => defaultValue)
  return item;
}

export function useToggle() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggle = () => setIsActive(() => !isActive)

  return [isActive, toggle] as const
}


export function useFormData(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const regex = '^[a-zA-Z]+$';
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    } else if (!e.target.value.match(regex)) {
      setErrorMessage(() => 'Value cannot include special characters or numbers')
    } else if (e.target.value.length < 2) {
      setErrorMessage(() => 'This is too short')
    } else {
      setErrorMessage(() => '')
    }
  }

  useEffect(() => {
    setValue(() => initialValue)
  }, [initialValue])
  return { value, errorMessage, handleChange, setErrorMessage } as const
}



export function useFormDataNormal(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    } else {
      setErrorMessage(() => '')
    }
  }

  useEffect(() => {
    setValue(() => initialValue)
  }, [initialValue])
  return { value, errorMessage, handleChange, setErrorMessage } as const
}

export function useFormDataPostCode(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const regex = '(\\d{2})[-](\\d{3})'

  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.match(regex)) {
      setErrorMessage(() => '')
    }
    if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    }
    if (e.target.value.length > 6) {
      setValue(() => value.substring(0, 6));
    }

    //const regex = '(\\d{2})[-](\\d{3})'
    if (e.target.value.length > 0 && !e.target.value.match(regex)) {
      setErrorMessage(() => 'The format must be (00-111)')
    }
    if (e.target.value.length > 2 && value.length < 3) {
      setValue(() => value + '-')
    }
  }

  useEffect(() => {
    setValue(() => initialValue)
  }, [initialValue])

  return { value, errorMessage, handleChange, setErrorMessage } as const
}


export function useFormDataTelephone(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const regex = '(\\d{9})'
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.match(regex)) {
      setErrorMessage(() => '')
    }
    if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    }
    if (e.target.value.match(regex) && e.target.value.length > 9) {
      setErrorMessage(() => 'Telephone number must have  9 digits eg.(888 888 888)')
    }
  }



  useEffect(() => {

    if (value.length > 0 && !value.match(regex)) {
      setErrorMessage(() => 'The format must be (888 888 888)')
    }

  }, [value])

  useEffect(() => {
    setValue(() => initialValue)
  }, [initialValue])

  return { value, errorMessage, handleChange, setErrorMessage } as const
}

export function useFormDataNIP(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const regex = '(\\d{10})'
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.match(regex)) {
      setErrorMessage(() => '')
    }
    if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    }
    if (e.target.value.match(regex) && e.target.value.length > 10) {
      setErrorMessage(() => 'Telephone number must have  9 digits eg.(999 999 999 9)')
    }
  }

  useEffect(() => {
    if (value && (value.length > 0 && !value.match(regex))) {
      setErrorMessage(() => 'The format must be (999 999 999 9)')
    }

  }, [value])

  useEffect(() => {
    setValue(() => initialValue)
  }, [initialValue])

  return { value, errorMessage, handleChange, setErrorMessage } as const
}





