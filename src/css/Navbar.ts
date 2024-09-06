import styled from "styled-components";

const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;

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
    z-index: 200;
  }

.nav-header{
  display: flex;
 align-items: center;
 justify-content: space-between;
 max-width: var(---maxWidth-2);
 width: 100vw;
 height: 4rem;
 margin: 0 auto;
}


.nav-header h1{
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
width: 100%;
height: 3.5rem;
background-color: var(---ghost);
}

.btn{
  background-color: transparent;
  border-color:transparent;
  color: var(---secondary);
  font-size:var(---fontSize-2);
}


.search{
  display: flex;
  width: 50%;
}

.search-form{
  display: flex;
  align-items: center;
  max-width: var(---maxWidth-2);
  margin: 0 auto;
  width: 100%;
 box-shadow:0 2px 2px rgba(0,0,0,0.2);
  border:var(---textColor-2) groove 0.1px;
 
}

.search-form input{
  width: 90vw;
  height: 2.2rem;
  text-indent: 10px;
border:none;
 outline: none;

}

.search-form input::placeholder{
 color: var(---textColor-2);
 letter-spacing: var(---spacing-0);  
 font-size:var(---fontSize-0);
}

.search-btn{
  width: 3rem;
  height: 2.2rem;
  background-color: var(---secondary);
  border-color:transparent;
  color: var(---textColor-4);
  border-radius:10%;
  margin-left:-0.25rem;
}

.list{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:2px 10px 5px 5px;
  border-radius:5%;
  cursor: pointer;
}

.list span{
  font-size:var(---fontSize-0);
  color: var(---textColor-1);
}

.list:hover{
  background-color: var(---ghost);
}

.big-nav{

  display: 
  none;
}

@media screen and (min-width:768px) {
  .small-nav{
    display: none;
  }
.big-nav{
  display: flex;
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