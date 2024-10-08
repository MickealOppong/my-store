import { RefObject } from "react";

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