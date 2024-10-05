import { Banner, BigBrands, CategoryContainer, CategoryMenu, FeaturedProducts, ProductCategories, Promo, SectionTitle, Slider, SmallBrands, Subscription } from "../components";
import Wrapper from "../css/Landing";
import { itemCategories, lastWatched, polecamy, sale } from "../util/data";


const Landing = () => {
  return <Wrapper>
    <ProductCategories />
    <section className="hero">
      <article className="hero-container">
        <div className="slider-category-container">
          <CategoryMenu />
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
    <FeaturedProducts data={polecamy} title="polecamy" />
    <CategoryContainer data={itemCategories} title="Zajrzyj tutaj" />
    <Banner text="Summer collections" image='' url="" />
    <FeaturedProducts data={sale} title="niedawno dodane" />
    <Banner text="Summer collections" image='' url="" />
    <FeaturedProducts data={lastWatched} title="ostatnio ogladane" />
    <Subscription />
  </Wrapper>
}
export default Landing;