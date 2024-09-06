import Wrapper from "../../css/ProductCategories"
import { category } from "../../util/data"
import ProductCategory from "./ProductCategory"

const ProductCategories = () => {

  return <Wrapper>
    {
      category.map((item) => {
        return <ProductCategory {...item} key={item.id} />
      })
    }
  </Wrapper>
}

export default ProductCategories