import styled from "styled-components";

const Wrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
max-width: var(---maxWidth-1);
margin:1rem auto;


.title{
  display: flex;
  align-items: center;
}
.categories{
  position: relative;
  display: flex;
  align-items: center;
  column-gap:1rem;
  width: 100%;
  overflow-x: scroll;
  overflow-y:hidden;
}

.category{
  display: flex;
  flex-direction: column;
  align-items: center;

}




.left-btn,
.right-btn{
display:none;
}


.category-img{
  width: 10rem;
  height:10rem;
transition: all .2s ease-in-out;
}

.category:hover .category-img{
transform: scale(1.2);
transition: all .2s ease-in-out;
}

.category-name{
  color: black;
  font-size: var(---fontSize-1);
  text-transform:capitalize;
}

.category:hover .category-name{
text-decoration:underline;
color: var(---primary);
}

@media screen and (min-width:768px) {
.categories{
  overflow:hidden;
}


.left-btn,
.right-btn{
  position: absolute;
  top:45%;
  display: flex;
  align-items: center;
  justify-content: center;
  width:3rem;
  height: 3rem;
  font-size: var(---fontSize-1);
  background-color: var(---white);
  border-color:transparent;
  border: var(---primary) solid 1px;
  color: var(---primary);
  border-radius:50%;
  cursor: pointer;
}
.left-btn{
  left: -2%;
}

.right-btn{
  right: -2%;
}
}
`

export default Wrapper;