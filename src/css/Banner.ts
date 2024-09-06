import styled from "styled-components";

const Wrapper = styled.section`
position: relative;
display: flex;
justify-content: space-around;
max-width: var(---maxWidth-1);
margin: 0 auto;
width: 100vw;
height: 10rem;
background-color: lightcyan;

.banner-info{
  position: absolute;
  top: 10%;
  left: 5%;
}
img{
  width: 100vw;
}
.link-btn{
  position: absolute;
  top: 30%;
  right: 10%;
  display: flex;
  align-items: center;
  column-gap:0.5rem;
  width: 6rem;
  height: 2.5rem;
  background-color: lightblue;
 border-color:transparent;
}


`

export default Wrapper;