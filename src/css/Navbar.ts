import styled from "styled-components";

const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
background-color: var(---white);




nav{
 display: flex;
  flex-direction: column; 
  width: 100vw;
  background-color: var(---white);
  box-shadow:0 0px 5px rgba(0,0,0,0.2);
  
}
  .fixed-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;

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
  color: var(---secondary)
}
.nav-center{
   display: flex;
 align-items: center;
 column-gap:1rem;
}

.nav-search{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5rem;
  background-color: var(---bgColor-1);
}

.btn{
  background-color: transparent;
  border-color:transparent;
  color: var(---secondary);
  font-size:var(---fontSize-2);
}


.list{
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:5%;
  padding:2px;
  cursor: pointer;
}

.list span{
  font-size:0.65rem;
  color: var(---textColor-1);
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

.cart-counter{
  position: absolute;
  top: -25%;
  right: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius:50%;
  background-color: var(---secondary);
    z-index: 200;
}

.cart-counter span{
  color: var(---white);
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