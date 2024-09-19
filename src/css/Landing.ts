import styled from "styled-components";

const Wrapper = styled.section`

.hero{
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100vw;
  height: 62vh;
  background-color: var(---hero-bg );
}

.hero-container{
  display: flex;
  flex-direction: column;
row-gap: 0.5rem;
}
.slider-category-container{
  display: flex;
  width: 100%;
}

.slider-promo{
  display: flex;
  column-gap:1rem;
  width: 100%;
 
}

.brand-title{
  display: flex;
  max-width: var(---maxWidth-1);
  width: 100vw;
  margin: 0 auto;
  font-size:var(---fontSize-0);

}
@media screen and (min-width:768px) {
.hero{
  height: 75vh;
}
.hero-container{
  column-gap:1rem;
  max-width: var(---maxWidth-1);
  width: 100vw;
  margin: 2rem auto;

}
.slider-category-container{
column-gap:1rem;
}
.slider-promo{
    height: 50vh;
}


.brands{
  display: flex;
  width: 100%;
 margin-top:-2rem;
}

}

@media screen and (min-width:1092px){

  .hero-container{
    column-gap:2rem;
  }
.slider-promo{
  display: flex;
  column-gap:2rem;

}

.slider-category-container{
column-gap:2rem;
}
}
`
export default Wrapper;