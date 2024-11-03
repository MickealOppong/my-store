import { Link } from "react-router-dom";
import Wrapper from "../../css/FeaturedProduct";
import { SelectedProduct } from "../../types/general";

const FeaturedProduct = ({ id, productImages, name, price }: SelectedProduct) => {

  return <Wrapper>
    <Link to={`/product/${id}`} className="product">
      <div className="img-container">
        <img src={productImages[0]} alt="" />
      </div>
      <div className="product-info">
        <div className="price" >
          <h2>{price}</h2>
        </div>
        <div className="description">
          <p>{`${name.substring(0, 45)}...`}</p>
        </div>
        <div className="shipping">
          <p>{''}</p>
        </div>
      </div>
    </Link>
  </Wrapper>
}
export default FeaturedProduct