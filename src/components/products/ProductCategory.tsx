import { Link } from "react-router-dom"
import { Category } from "../../types/general"
import Icon from "../general/Icon"

const ProductCategory = ({ id, icon, category }: Category) => {
  return <Link to={`/${category},${id}`} className="category-link">
    <Icon icon={icon} />
    <span>{category}</span>
  </Link>

}
export default ProductCategory