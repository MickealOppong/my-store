import axios from "axios";
import { RefObject } from "react";
import { Category } from "../types/general";
import { category } from "./data";

export const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}
export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key) ? localStorage.getItem(key) : null
  return item;
}

export function getFilterContainerHeight(ref: RefObject<HTMLDivElement>) {
  let height;
  const elem = ref.current;
  if (elem) {
    height = elem.getBoundingClientRect().height
  }
  return height
}

export const getCategoryFromPathname = (pathname: string): { path: string, id: string } => {
  return { path: pathname.split(',')[0].split('/')[1], id: pathname.split(',')[1] }
}



export function findLinks(item: string): Category[] {
  const elem: Category[] = []
  category.map((parent) => {
    if (parent.category.toLowerCase() === item.toLowerCase()) {
      elem.push(parent)
    } else {
      parent.sub.find((firstChild) => {
        if (firstChild.category.toLowerCase() === item.toLowerCase()) {
          elem.push(parent)
          elem.push(firstChild)
        } else {
          firstChild.sub.find((secondChild) => {
            if (secondChild.category.toLowerCase() === item.toLowerCase()) {
              elem.push(parent)
              elem.push(firstChild)
              elem.push(secondChild)
            } else {
              secondChild.sub.find((thirdChild) => {
                if (thirdChild.category.toLowerCase() === item.toLowerCase()) {
                  elem.push(parent)
                  elem.push(firstChild)
                  elem.push(secondChild)
                  elem.push(thirdChild)
                }
              })
            }
          })
        }
      })
    }
  })
  return elem;
}



const URL = 'http://localhost:3000';
export const customFetch = axios.create({
  baseURL: URL
})

export const addTelephone = async (telephone: string, id: number): Promise<boolean | undefined> => {

  try {
    const response = await customFetch.post(`/users/add-number/${id}`, { telephone }, {
      params: {
        id
      },
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('uat')}`,
        "Content-Type": 'multipart/form-data'
      }
    })
    if (response.status === 200) return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}