import styled from "styled-components";

const Wrapper = styled.section`
position: relative;
display: flex;
flex-direction:column;
background-color: var(---white);



.products-container{
  display: flex;
  flex-direction:column;
  max-width: var(---maxWidth-1);
  margin: 0 auto;
  width: 100%;
}

.title{
  display: flex;
  align-items: center;
}


.products{
  display: flex;
  align-items: center;
  column-gap:1rem;
  width: 100%;
  overflow-x: scroll;
}

.product{
  display: flex;
  flex-direction: column;
   width: 15rem;
}


.product-info{
  padding-left: 10px;
  padding-right:10px;
}

.shipping{
  color: var(---shippingColor);
}
.price{
  color: var(---priceColor);
}
.img-container img{
    width: 15rem;
  height: 15rem;
}

.description{
font-size:var(---fontSize-1)
}

.left-btn,
.right-btn{
    display: none;
}





@media screen and (min-width:768px) {

.products{
  overflow-x:hidden;
}

.left-btn,
.right-btn{
  position: absolute;
  top:50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width:3rem;
  height: 3rem;
  font-size: var(---font-Size-1);
  background-color: var(---white);
  border-color:transparent;
  border: var(---primary) solid 1px;
  color: var(---primary);
  border-radius:50%;
  cursor: pointer;
}
.left-btn{
  left: 0%;
}

.right-btn{
  right: 0%;
}
}
`

export default Wrapper;