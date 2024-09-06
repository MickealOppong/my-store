import Wrapper from "../../css/FeaturedProduct";
import { Product } from "../../types/general";

const FeaturedProduct = ({ img, description, shipping, price }: Product) => {

  return <Wrapper>
    <article className="product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="product-info">
        <div className="price" >
          <h2>{price}</h2>
        </div>
        <div className="description">
          <p>{`${description.substring(0, 45)}...`}</p>
        </div>
        <div className="shipping">
          <p>{shipping}</p>
        </div>
      </div>
    </article>
  </Wrapper>
}
export default FeaturedProduct