import styled from "styled-components";

const Wrapper = styled.div`

@media screen and (min-width: 768px) {

display: flex;
flex-direction: column;
background-color: var(---white);
width: 20vw;
box-shadow:0 0px 5px rgba(0,0,0,0.2);

.menu-container{
display: flex;
flex-direction:column;
padding-left:10px;
padding-right:10px;
}

.menu-title{
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size:var(---fontSize-1);
  background-color: var(---bgColor-1);
  color: black;
  font-weight:700;
}

.menu-title h4{
 padding-left:10px;
}


.menu-link-container{
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-content: space-between;
  width: 100%;
  border-top:var(---bgColor-1) solid 1px;
  font-size:var(---fontSize-1);
}



.menu-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2.5rem;
color: var(---textColor-1);
text-transform:capitalize;
}


.menu-link svg {
  font-size:1rem;
  color: var(---secondary);
}


.link{
  display: flex;
  align-items: center;
  column-gap:10px;
}


.logout-btn:hover{
    background-color: var(---bgColor-1);
}


.counter{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius:50%;
  background-color: var(---primary);
  color: var(---white);
}




.logout-container{
  display: flex;
  width: 100%;
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



@media screen and (min-width: 1092px){


.menu-link-container{
  flex-direction: row;
}

.logout-container{
  width: 3rem;
}
}
`

export default Wrapper