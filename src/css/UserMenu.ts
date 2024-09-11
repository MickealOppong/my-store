import styled from "styled-components";

const Wrapper = styled.div`
position: absolute;
top: 4rem;
right: 10%;
display: flex;
flex-direction: column;
background-color: var(---white);
width: 16rem;
box-shadow:0 5px 5px rgba(0,0,0,0.2);
z-index: 200;

.link-title{
  display: flex;
  align-items: center;
  height: 2rem;
  font-size:var(---fontSize-1);
  background-color: var(---secondary);
  color: var(---white);
  padding: 5px;
}


.menu-link{
  display: flex;
  align-items: center;
  column-gap:10px;
  color: var(---textColor-1); 
  text-transform:capitalize;
  font-size:1.2re;
  padding: 10px;
  margin-bottom:5px;
}

.menu-link svg {
  font-size:1.3rem;
  color: var(---secondary);
}
.text{
  width: 12rem;
}


.counter{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius:50%;
  background-color: var(---primary);
  color: var(---white);
}
`

export default Wrapper