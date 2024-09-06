import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items: center;
column-gap:5px;
height: 6rem;
width: 100%;
overflow-x:scroll;


.category-link{
  display: flex;
  flex-direction:column;
  align-items: center;
  background-color: transparent;
  border-color:transparent;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  color: var(---textColor-3);
  cursor: pointer;
  padding: 5px;

}


.category-link:first-child{
  margin-left:15px;
}


.category-link:last-child{
  margin-right:15px;
}

.category-link svg{
width: 5rem;
height: 2rem;
  font-size:var(---fontSize-3);
}
.category-link span{
  font-size:var(---fontSize-0);
}


@media screen and (min-width:768px) {
display: none;
}
`
export default Wrapper;