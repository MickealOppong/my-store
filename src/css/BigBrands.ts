import styled from "styled-components";

const Wrapper = styled.div`

display: none;
@media screen and (min-width:768px) {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width:var(---maxWidth-1);
  margin: 2rem auto;


.brand-list{
display: flex;
align-items: center;
column-gap:0.5rem;
width: 100%;
height:100%;
overflow: hidden;
}

.brand{
display: flex;
align-items: center;
}


img{
  width:9rem ;
  height: 5rem;
}

.left-btn,
.right-btn{
  position: absolute;
  top:20%;
  display: flex;
  align-items: center;
  justify-content: center;
  width:3rem;
  height: 3rem;
  font-size: var(---font-Size-1);
  background-color: var(---white);
  border-color:transparent;
  border: var(---secondary) solid 0.5px;
  color: var(---secondary);
  border-radius:50%;
  cursor: pointer;
}
.left-btn{
  left: -2.0%;
}

.right-btn{
  right: -2.0%;
}


}






`
export default Wrapper;