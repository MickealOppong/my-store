import styled from "styled-components";

const Wrapper = styled.footer`

  display: flex;
  flex-direction:column;
  justify-content: space-between;
  max-width: var(---maxWidth-1);
  margin: 0 auto;


.small-links{
display: flex;
flex-direction: column;
justify-content: space-between;
}

.link-title{
  display: flex;
  align-items: center;
justify-content: space-between;
border-bottom:rebeccapurple solid 0.5px;
}



.big-links{
display: none;
}

.show{
height:auto ;
transition:all 3s ease-in-out
}

.hide{
height: 0;
transition:all 3s ease-in-out
}


.links-content{
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@media screen and (min-width:768px){

    display: flex;
    flex-direction: row;
  justify-content: space-between;
  column-gap:2rem;

.small-links{
  display: none;
}

.big-links{
  display: flex;
justify-content: space-between;
width: 100%;
}

.big-links title{
  display: flex;
  align-items: center;
}
}
`

export default Wrapper;