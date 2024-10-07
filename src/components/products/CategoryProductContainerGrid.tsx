import styled from "styled-components"
import { Product } from "../../types/general"
import SingleCategoryProductGrid from "./SingleCategoryProductGrid"

const CategoryProductContainerGrid = ({ data }: { data: Product[] }) => {
  return <Wrapper>
    <div className="products">
      {
        data.map((product, index) => {
          return <div key={index} >
            <SingleCategoryProductGrid {...product} />
          </div>
        })
      }
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

   .products{
      display: flex;
    flex-direction: column;
    row-gap: 2px;
  }

 @media screen and (min-width: 768px) {
   .products{
      display: grid;
grid-template-columns:repeat(2,1fr);
  gap: 2px;
  }
 }

 @media screen and (min-width: 1092px) {
   .products{
      display: grid;
grid-template-columns:repeat(3,1fr);
gap: 2px;
  }
 }
`
export default CategoryProductContainerGrid