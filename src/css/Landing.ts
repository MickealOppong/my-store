import styled from "styled-components";

const Wrapper = styled.section`
position: relative;
.hero{
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  height: 70vh;
  background-color: var(---ghost);

}


.hero-menu{
  display: flex;
  column-gap:2px;
}

.child-menus{
  display: none;
}
.hero-container{
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

.slider-category-container{
  position: relative;
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

.child-menu{
  display: none;
}

@media screen and (min-width:768px) {

.hero{
  height: 85vh;
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

.child-menus{
  display: flex;
}

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