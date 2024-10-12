import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: var(---white);
width: 100vw;
height: auto;
box-shadow:var(---shadow-2);

.menu-container{
display: flex;
flex-direction:column;
}

.menu-title{
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size:var(---fontSize-1);
  background-color: var(---ghost);
  color: black;
  font-weight:700;
}

.menu-title h4{
  margin-left:10px;
}


.menu-link-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top:var(---ghost) solid 1px;
}



.menu-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap:10px;
  width: 100%;
  height: 2.5rem;
  color: var(---textColor); 
  text-transform:capitalize;
  font-size:1rem;
 padding-left:10px;
 padding-right:20px;
}

.menu-link svg {
  font-size:1rem;
  color: var(---primary);
}

.link{
  display: flex;
  align-items: center;
  column-gap:10px;
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




.login-btn:hover{
  background-color: var(---secondary);
    transition:'1s'
}





.logout-container:hover{
  background-color: var(---bgColor-1);
}

.logout-btn{
  display: flex;
  align-items: center;
  height:2.4rem;
  background-color: transparent;
  border-color:transparent;
  color: var(---secondary);
  text-transform:capitalize;
}


@media screen  and (min-width:768px){

display: none;

}
`

export default Wrapper;