import { useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../../types/general";
import { categoryMain } from "../../util/data";
import { useAppSelector } from "../../util/hooks";

const SubCategory = () => {
  const menuItem = useAppSelector((state) => state.userMenu.menuItem)
  const [data] = useState<Category[]>(categoryMain);
  const selected = data.find((item) => item.category === menuItem)

  return <div>
    <div>
      <h2>Sub-category</h2>
    </div>
    <div>
      {
        selected?.sub.map((cat) => {
          return <Link to={`/${cat.category},${cat.id}`}><span>{cat.category}</span></Link>
        })
      }
    </div>
  </div>
}
export default SubCategory