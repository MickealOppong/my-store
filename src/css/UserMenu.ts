import styled from "styled-components";

const Wrapper = styled.div`

@media screen and (min-width: 768px) {

display: flex;
flex-direction: column;
background-color: var(---white);
width: 22vw;
box-shadow:var(---shadow-1);
border: gray solid 0.5px;
border-radius:5px;
padding:1px;

.menu-title{
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  font-size:var(---fontSize-1);
  background-color: var(---ghost);
  color: black;
  font-weight:700;
}

.menu-title h4{
 padding-left:5px;
}

.menu-container{
display: flex;
flex-direction:column;
} 



.menu-link-container{
  display: flex;
  flex-direction:column;
  width: 100%;
  border-top:var(---ghost) solid 1px;

}


.menu-link{
  display: flex;
  align-items: center;
  height: 2.5rem;
  color: var(---textColor);
  text-transform:capitalize;
  padding-left:5px;
  padding-right:5px;
}



.menu-link:hover{
  background-color: var(---ghost);
}

.link{
  display: flex;
  align-items: center;
  width: 100%;
  column-gap:5px;
}


.link svg {
  font-size:1rem;
  color: var(---primary);

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




.logout-container{
  display: flex;
  width: auto;
  height: 100%;
 cursor: pointer;
}

.logout-btn{
  display: flex;
  align-items: center;
  width:auto;
  background-color: transparent;
  border-color:transparent;
  color: var(---secondary);
  text-transform:capitalize;
  cursor: pointer;
  padding: 10px;
}

.logout-container:hover{
    background-color: var(---ghost);
}

}

@media screen and (min-width: 1092px) {
  .menu-link-container{
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .menu-link{
    display: flex;
   width: 100%;
     padding-left:10px;
  padding-right:10px;
  }
}


`

export default Wrapper