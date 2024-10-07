import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Category } from "../../types/general";
import { categoryMain } from "../../util/data";
import { useAppSelector } from "../../util/hooks";

const SubCategory = () => {
  const menuItem = useAppSelector((state) => state.userMenu.menuItem)
  const [data] = useState<Category[]>(categoryMain);
  const selected = data.find((item) => item.category === menuItem)

  return <Wrapper>
    <div className="sub-title">
      <h2>Sub-category</h2>
    </div>
    <div className="sub-content">
      {
        selected?.sub.map((cat) => {
          return <Link to={`/${cat.category},${cat.id}`}><span>{cat.category}</span></Link>
        })
      }
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;


.sub-content{
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.sub-content a{
  color: var(---textColor-3);
}
`
export default SubCategory