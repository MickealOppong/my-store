import { Link } from "react-router-dom";
import { hideCategoryMenu } from "../../features/userToggleSlice";
import { Sub } from "../../types/general";
import { useAppDispatch } from "../../util/hooks";

const SidebarCategory = ({ category, url }: Sub) => {
  const dispatch = useAppDispatch();
  return <Link to={url} className="category" onClick={() => dispatch(hideCategoryMenu())}>
    <p className="category-name">{category}</p>
  </Link>

}

export default SidebarCategory