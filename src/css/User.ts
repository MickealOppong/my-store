import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
width: 100vw;
background-color: var(---bgColor-1);


.side-menu{
  display:none;
}

.outlet{
    min-height: 90vh;
}


@media screen  and (min-width:768px){

.side-menu{
  display:flex;
  margin-top:2rem;
  padding-left:15px;
  padding-right:15px;
}

.outlet{
  display: flex;
   margin-top:2rem;
  padding-left:15px;
  padding-right:15px;
}
}

@media screen  and (min-width:1092px){

.side-menu{
  display:flex;
  margin-top:3rem;
  padding-left:20px;
  padding-right:15px;
}

.outlet{
  display: flex;
   margin-top:2rem;
  padding-left:2rem;
  padding-right:15px;
}
}
`

export default Wrapper