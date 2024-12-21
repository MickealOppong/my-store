import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
background-color: var(---ghost);



.side-menu{
  display:none;
}


@media screen  and (min-width:768px){
  display: flex;
.parent{
  display: flex;
  max-width: 95vw;
  width: 100%;
  margin: 3rem auto;
  column-gap:var(---c-gap-1);
}
.side-menu{
  display:flex;
}

.outlet{
  display: flex;
  width: 70vw;
}
}

@media screen  and (min-width:1092px){
.outlet{
  display: flex;
}
}

@media screen  and (min-width:1200px){
.parent{
  display: flex;
  max-width: 90vw;
  width: 100%;
  margin: 3rem auto;
  column-gap:var(---c-gap-1);
}
.outlet{
  display: flex;
  width: 65vw;

}
}
`

export default Wrapper