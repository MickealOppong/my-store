import { Link } from "react-router-dom";
import { hideCategoryMenu } from "../../features/userToggleSlice";
import { Category } from "../../types/general";
import { useAppDispatch } from "../../util/hooks";

const SidebarCategory = ({ id, category }: Category) => {
  const dispatch = useAppDispatch();
  return <Link to={`/${category},${id}`} className="category" onClick={() => dispatch(hideCategoryMenu())}>
    <p className="category-name">{category}</p>
  </Link>

}

export default SidebarCategory