import styled from "styled-components";

const Wrapper = styled.section`
position: relative;
display: flex;
width: 100vw;
height: 40vh;
overflow: hidden;


.slide{
  position: absolute;
  top: 0;
  left: 0;
  display:flex;
  flex-direction: column;
}

img{
width: 100vw;
height: 40vh;
}

.slide-content{
  position: absolute;
  top: 20%;
  left: 2%;
}

.slide-text{
  font-size: var(---fontSize-2);
  color: var(---white);
  text-transform:uppercase;
}

.slide-link{
  margin: 3rem 0;
  border-color:transparent;
  background-color: var(---secondary);
  width: 6rem;
  height: 2rem;
}


.slide-link a{
    color: var(---textColor-4);
    text-transform:capitalize;
}

.btns{
position:absolute;
top: 95%;
left: 40%;
width: 100px;

display: flex;
align-items: center;
justify-content: center;
column-gap:1rem;
background-color: var(---white);
padding: 5px;
border-radius:10%;
}


.dot-btn{
  border-color:transparent;
  width: 8px;
  height: 8px;
  border-radius:50%;
  background-color: var(---textColor-2);
transition: all .5s ease-in-out;
}
.active-btn{
   width: 20px;
  height: 8px;
    border-radius:25%;
transition: all .5s ease-in-out;
}


@media screen and (min-width:768px) {

  width:70%;
  height: 50vh;
img{
height: 50vh;
}
}

@media screen and (min-width:1092px) {
  width:50vw;

}
`
export default Wrapper;