import { useLoaderData } from "react-router-dom";
import { Banner, BigBrands, CategoryContainer, CategoryMenu, FeaturedProducts, ProductCategories, Promo, SectionTitle, Slider, SmallBrands, Subscription } from "../components";
import CategoryChildMenuContainer from "../components/general/CategoryChildMenuContainer";
import Wrapper from "../css/Landing";
import { useFetchSessionId } from "../hooks/useFetchSessionId";
import { SingleProduct } from "../types/general";
import { itemCategories, lastWatched, sale } from "../util/data";
import { customFetch } from "../util/util";

export const loader = async () => {

  try {
    const response = await customFetch.get('/store/products',)
    const products = response.data;
    return products;
  } catch (error) {
    return null;

  }
}

const Landing = () => {
  const products = useLoaderData() as SingleProduct[]
  const { error } = useFetchSessionId()
  console.log(error);

  return <Wrapper>
    <ProductCategories />
    <section className="hero">
      <article className="hero-container">
        <div className="slider-category-container">
          <div className="hero-menu">
            <CategoryMenu />
            <div className="child-menus">
              <CategoryChildMenuContainer />
            </div>
          </div>
          <div className="slider-promo">
            <Slider />
            <Promo />
          </div>
        </div>
        <div className="brand-title">
          <SectionTitle title="Strefa marek" />
        </div>
        <div className="brands">
          <SmallBrands />
          <BigBrands />
        </div>
      </article>
    </section>
    <FeaturedProducts data={products} title="polecamy" />
    <CategoryContainer data={itemCategories} title="Zajrzyj tutaj" />
    <Banner text="Summer collections" image='' url="" />
    <FeaturedProducts data={sale} title="niedawno dodane" />
    <Banner text="Summer collections" image='' url="" />
    <FeaturedProducts data={lastWatched} title="ostatnio ogladane" />
    <Subscription />
  </Wrapper>
}
export default Landing;