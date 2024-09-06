import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 100vw;
background-color: var(---hero-bg);

.title{
font-size:var(---fontSize-1);
margin-left:1rem;
margin-bottom:0.5rem;
}

.small-brand{
  display: flex;
  column-gap:10px;
  width: 100%;
  overflow-x:scroll;
}


.single-brand{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 5rem;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  background-color: var(---white);
}

.single-brand img{
  width: 7rem;
  height: 3rem;
}

.single-brand:last-child{
  margin-right:1rem;
}

.single-brand:first-child{
  margin-left:1rem;
}

@media screen and (min-width:768px){
display: none;
}

`
export default Wrapper;