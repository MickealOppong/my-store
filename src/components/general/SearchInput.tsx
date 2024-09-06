import { FiSearch } from "react-icons/fi"
import { Search } from "../types/general"

const SearchInput = ({ name, placeholder }: Search) => {
  return <form className="search-form">
    <input type="search" name={name} id={name} placeholder={placeholder} />
    <button className="search-btn"><FiSearch /></button>
  </form>
}
export default SearchInput