import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
width: 100vw;
background-color: var(---ghost);


.side-menu{
  display:none;
}


@media screen  and (min-width:768px){
  display: flex;

.parent{
  display: flex;
  max-width: var(---maxWidth-1);
  margin: 3rem auto;
  column-gap:var(---c-gap-1);
}
.side-menu{
  display:flex;
}

.outlet{
  display: flex;
}
}

@media screen  and (min-width:1092px){
  display: flex;

  .parent{
  column-gap:var(---c-gap-2);
}

.side-menu{
  display:flex;
}

.outlet{
  display: flex;
}
}
`

export default Wrapper