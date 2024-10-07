import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showChildMenu } from "../../features/userToggleSlice";
import { Category } from "../../types/general";
import Icon from "./Icon";

const CategoryMenuItem = ({ id, icon, category }: Category) => {
  const dispatch = useDispatch();
  return <Link to={`/${category},${id}`} className="category-item" onMouseOver={() => dispatch(showChildMenu({ category }))}  >
    <Icon icon={icon} />
    <p className="category-name">{category}</p>
  </Link>
}
export default CategoryMenuItem;