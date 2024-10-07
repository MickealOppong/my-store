import { useEffect, useState } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";

const PaginationContainer = () => {
  const [pageCount] = useState<number>(100);


  useEffect(() => {

  }, [])
  return <Wrapper>
    <div className="pagination" >
      <p>Page</p>
      <Pagination />
      <div className="pageCount">
        <span>of</span>
        <span>{pageCount}</span>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
.pagination{
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap:1.5rem;
    color: var(---textColor-3);
}

.pageCount{
  display: flex;
  align-items: center;
  column-gap:1rem;
  margin-left:0.5rem;

}

.input-width{
  width: 6rem;
}
`
export default PaginationContainer