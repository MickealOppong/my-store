import styled from "styled-components"
import { Product } from "../../types/general"
import SingleCategoryProduct from "./SingleCategoryProduct"

const CategoryProductContainer = ({ data }: { data: Product[] }) => {
  return <Wrapper>
    <div className="products">
      {
        data.map((product, index) => {
          return <div key={index} >
            <SingleCategoryProduct {...product} />
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

`
export default CategoryProductContainer