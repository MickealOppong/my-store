import styled from "styled-components";

const Wrapper = styled.div`
position: absolute;
top: 15%;
right: 10%;
display: flex;
flex-direction: column;
background-color: var(---white);
box-shadow:var(---shadow-1);
z-index: 100;
border: gray solid 0.5px;
border-radius:5px;
padding:1px;

.link-container{
  display: flex;
  flex-direction:column;
}

.link-title{
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  font-size:var(---fontSize-1);
  background-color: var(---ghost);
  color: black;
  font-weight:700;
}

.link-title h4{
  margin-left:10px;
}


.menu-link-container{
  display: flex;
  align-items: center;
  width: 100%;
  border-top:var(---ghost) solid 1px;

}


.menu-link{
  display: flex;
  align-items: center;
  column-gap:5px;
  width: 100%;
  color: var(---textColor); 
  text-transform:capitalize;
  font-size:var(---fontSize-1);
  padding: 10px;
}

.menu-link svg {
  font-size:1rem;
  color: var(---primary);
}


.text{
  width: 12rem;
}


.menu-link:hover{
  background-color: var(---ghost);
}



.logout-btn:hover{
    background-color: var(---ghost);
}


.counter{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius:50%;
  background-color: var(---secondary);
  color: var(---white);
}

@media screen and (min-width: 768px){
  .user-reg-container{
  display: flex;
  flex-direction: column;
  width: 20rem;
  row-gap: 1rem;
 padding: 1rem;
}


.login-container,
.join-container{
  display: flex;
  align-items: center;
  width: 100%;
}

.login-btn{
  display: flex;
  align-items: center;
  justify-content:center;
  width:100%;
  height: 3rem;
  background-color: var(---primary);
  color: var(---white) ;
  box-shadow:var(---shadow-1);
}

.join-btn{
   display: flex;
  align-items: center;
  justify-content:center;
  width:100%;
  height: 3rem;
  background-color:transparent;
  border-color:transparent;
  border:var(---secondary) solid 1px;
  color: var(---secondary) ; 
    transition:all .2s ease-in-out;
}

.join-btn,
.login-btn{
  box-shadow:var(---shadow-1);
  border-radius:5px;
}



.join-btn:hover{
  background-color:var(---secondary);
  color: var(---white);
  transition:all .2s ease-in-out;

}

.info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(---fontSize-1);
  width: 100%;
}


.left,
.right{
 width: 6rem;
 height: 1px;
 background-color: var(---textColor);
}


.logout-container:hover{
  background-color: var(---ghost);
}

.logout-btn{
  display: flex;
  align-items: center;
  width: 100%;
  height:2.4rem;
  background-color: transparent;
  border-color:transparent;
  color: var(---secondary);
  text-transform:capitalize;
}
}

`

export default Wrapper