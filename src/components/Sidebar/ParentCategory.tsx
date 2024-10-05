import { Link } from "react-router-dom"
import { hideCategoryMenu } from "../../features/userToggleSlice"
import { Category } from "../../types/general"
import { useAppDispatch } from "../../util/hooks"
import Icon from "../general/Icon"

const ParentCategory = ({ icon, category, url }: Category) => {
  const dispatch = useAppDispatch();
  return <Link to={url} className="category" onClick={() => dispatch(hideCategoryMenu())}>
    <Icon icon={icon} />
    <p className="category-name">{category}</p>
  </Link>

}

export default ParentCategory