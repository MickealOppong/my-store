import styled from "styled-components";

const Wrapper = styled.footer`
background-color: var(---ghost);
.footer-center{
    display: flex;
  flex-direction:column;
  justify-content: space-between;
  max-width: var(---maxWidth-2);
  margin: 0 auto;
  width: 100%;
}


.payment-options{
  display: flex;
  align-items: center;
  column-gap:var(---c-gap-1);

}

.payment-options p{
  color: var(---textColor);
}

.footer-info{
  display: flex;
  flex-direction:column;
  margin:1rem auto;
  width: 100%;

}
.socials{
  display: flex;
  justify-content: left;
  column-gap:1rem;
}

.social-link{
  color: var(---textColor-1);
}
.small-links{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.link-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom:var(---textColor) solid 0.5px;
}

.link-title p{
  font-size: var(---fontSize-1) ;
}


.big-links{
  display: none;
}

.show{
  height:auto ;
}

.hide{
  height: 0;
}


.links-content{
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.link{
  color:var(---textColor);
  font-size: var(---fontSize-1) ;
}

@media screen and (min-width:768px){

   display: flex;
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


.footer-info{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
    border-top:gray solid 0.5px;
}

}
`

export default Wrapper;