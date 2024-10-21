import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/userSlice'
import type { AppDispatch, AppStore, RootState } from '../store'
import { customFetch } from './util'

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
  const [errorMessage, setErrorMessage] = useState<string>(initialValue);
  const regex = '^[a-zA-Z]+$';
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    } else if (e.target.value.length < 2) {
      setErrorMessage(() => 'This is too short')
    } else if (!e.target.value.match(regex)) {
      setErrorMessage(() => 'Value cannot include special characters or numbers')
    } else {
      setErrorMessage(() => '')
    }

  }

  return { value, errorMessage, handleChange } as const
}


export function useFormDataPostCode(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);
  const [errorMessage, setErrorMessage] = useState<string>(initialValue);
  const regex = '/^(\\d{2})-(\\d{3})+$/';
  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
    if (e.target.value.length === 0) {
      setErrorMessage(() => 'This field  is  required')
    } else if (!e.target.value.match(regex)) {
      setErrorMessage(() => 'The format must be (xx-xxx)')
    } else {
      setErrorMessage(() => '')
    }

  }

  useEffect(() => {
    if (value.length > 6) {
      setValue(() => value.substring(0, 6));
    }
  }, [value.length])

  return { value, errorMessage, handleChange } as const
}


export function useFormDataTelephone(initialValue: string) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setValue(() => e.target.value)
  }

  return { value, handleChange } as const
}

export function useLogout(accessToken: string | null) {
  //const [success, setSuccess] = useState<boolean>(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = async function () {
    if (!accessToken) {
      return;
    }
    try {
      const response = await customFetch.delete('/auth/logout', {
        params: {
          accessToken
        },
      })
      if (response.status === 200) {
        dispatch(logoutUser());
        navigate('/')
      }

    } catch (error) {

    }
  }

  return [logout] as const
}