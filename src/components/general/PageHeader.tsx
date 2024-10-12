import { FiChevronRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { findLinks, getCategoryFromPathname } from "../../util/util";

const PageHeader = () => {
  const location = useLocation();
  const { path } = getCategoryFromPathname(location.pathname);


  return <Wrapper >
    <div className="category-header">
      <h2 className="category-title">{findLinks(path)[findLinks(path).length - 1].category}</h2>
    </div>
    <div>
      <div className="link-parent">
        <div className="">
          <span>Za</span>
        </div>
        {
          findLinks(path).map((link) => {
            return <div key={link.id} className="link-container">
              <FiChevronRight />
              <Link to={`/${link.category},${link.id}`} className={`link ${link.category === path ? 'active-link' : ''}`}>
                <span>{link.category}</span>
              </Link>
            </div>
          })
        }
      </div>
    </div>

  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(---maxWidth-1);
  margin: 0 auto;
  margin-bottom:2rem;

  .category-title{
    font-weight:400;
    font-size:var(---fontSize-2);
  }

  .link-parent{
    display: flex;
    align-items: center;
    column-gap:5px;
  }

  .link-container{
    display: flex;
    align-items: center;
  }

.link-container svg{
  color: var(---primary);
}

.link{
  color: var(---textColor);
}

.active-link{
  color: var(---primary);
}


`
export default PageHeader;