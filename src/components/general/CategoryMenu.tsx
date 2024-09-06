import styled from "styled-components"

const CategoryMenu = () => {

  return <Wrapper className="category">

    <h2>kategorie</h2>
  </Wrapper>
}


const Wrapper = styled.div`
  display: none;
  width: 30vw;
  height: 65vh;


@media screen and (min-width:768px) {
display: flex;
width: 30vw;
height:50vh;
background-color: lightblue;
}


@media screen and (min-width:1092px){
width: 25vw;
}
`

export default CategoryMenu