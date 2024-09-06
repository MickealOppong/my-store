import { Link } from "react-router-dom"
import { ProductBrands } from "../../types/general"

const Brand = ({ brand, id }: ProductBrands) => {

  return <Link to={`me/${id}`} className="single-brand">
    <img src={brand} alt={id} />
  </Link>
}

export default Brand