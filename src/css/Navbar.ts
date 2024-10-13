import styled from "styled-components";

const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
  background-color: var(---white);
  width: 100vw;



nav{
  display: flex;
  flex-direction: column; 
  background-color: var(---white);
  box-shadow:var(---shadow-1);
  
}
  .fixed-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;

  }

.nav-header{
  display: flex;
 align-items: center;
 justify-content: space-between;
 max-width: var(---maxWidth-2);
 width: 100vw;
 height: 5rem;
 margin: 0 auto;
}


.nav-header .logo{
  font-size:var(---fontSize-2);
  font-style:italic;
  color: var(---primary)
}
.nav-center{
   display: flex;
 align-items: center;
 column-gap:var(---c-gap-1);
}

.nav-search{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  background-color: var(---ghost);

}

.btn{
  background-color: transparent;
  border-color:transparent;
  color: var(---primary);
  font-size:var(---fontSize-1);
}


.list{
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:5%;
  padding:var(---padding-1);
  cursor: pointer;
}

.list span{
  font-size:0.75rem;
  color: var(---textColor);
}

.list:hover{
  background-color: var(---ghost);
}

.big-nav{
  display: none;
}

.name-container{
  position: relative;
  display: flex;

}

.name-container svg{
  font-size:1.2rem;
}

.cart-counter{
  position: absolute;
  top: -20%;
  right: -5%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color: var(---secondary);
  z-index: 2;
}

.sm-cart-counter{
  position: absolute;
  top: 0%;
  right: -10%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color: var(---secondary);
  z-index: 2;
}

.cart-counter span,
.sm-cart-counter span{
  color: var(---white);
  font-size:0.65rem;
}


.search-input{
  height: 2.2rem;
}

@media screen and (min-width:768px) {
  .small-nav{
    display: none;
  }
.big-nav{
  display: flex;
}
.search{
  width: 40vw;
}

}


@media screen and (min-width:1092px) {
.list{
  display: flex;
  flex-direction: row;
  align-items: center;
}

.list span{
  font-size:var(---fontSize-1);
}

.nav-header h1{
  font-size:var(---fontSize-3);
}


.search-form input{
  width: 100%
}
}

`
export default Wrapper;