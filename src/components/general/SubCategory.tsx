import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Category } from "../../types/general";
import { findLinks, getCategoryFromPathname } from "../../util/util";

const SubCategory = () => {
  const location = useLocation()
  const { path } = getCategoryFromPathname(location.pathname);
  const selectedItems = findLinks(path);
  const previous = getPreviousCategory(selectedItems);
  const data = findLinks(path).find((i) => i.category === path);


  function getPreviousCategory(data: Category[]) {
    if (data.length === 1) {
      return {
        category: 'home',
        id: '1'
      };
    } else {
      return {
        category: data[data.length - 2].category,
        id: data[data.length - 2].id
      };
    }
  }


  return <Wrapper>
    <div className="sub-title">
      <h2>Sub-category</h2>
      <div className="return-home">
        <span>Back to</span>
        <Link to={`${selectedItems.length === 1 ? '/' : `/${previous?.category},${previous?.id}`}`}>{previous?.category}</Link>
      </div>
    </div>
    <div className="sub-content">
      {
        data?.sub.map((item) => {
          return <Link to={`/${item.category},${item.id}`} key={item.id}>{item.category}</Link>
        })
      }
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;


  .sub-title  h2{
    font-weight:500;
  }

  .return-home{
    display: flex;
    column-gap:10px;
    margin-bottom:1rem;
  }

  .return-home a{
    color: var(---primary);
    text-decoration:underline;
  }
.sub-content{
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.sub-content a{
  color: var(---textColor);
}
`
export default SubCategory