import { Link } from "react-router-dom";
import { ItemCategory } from "../../types/general";

let SingleCategory = ({ img, category }: ItemCategory) => {

  return <Link to={''} className="category" >
    <img src={img} alt={category} className="category-img" />
    <p className="category-name">{category}</p>
  </Link>
}
export default SingleCategory;