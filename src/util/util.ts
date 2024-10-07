export const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value)
}
export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key) ? localStorage.getItem(key) : null
  return item;
}