import styled from "styled-components";

const Wrapper = styled.section`

  display: flex;
  width: 100%;
  height: 10rem;
background-color: var(---secondary);

.subscription-container{
  display: flex;
  flex-direction: column;
  max-width: var(---maxWidth-2);
  margin: 0 auto;
  width: 100%;
}


.message-container{
  display: flex;
  color:var(---textColor-4);
}
.form-control{
display: flex;
align-items: center;
border: gray solid 1px;
width: 100%;
height: 3rem;
background-color: var(---white);
}


.input-control{
  background-color: var(---white);
  width: 100%;
  height: 2rem;
  border: none;
  text-indent:10px;
  outline:none;
}


.join{
  width: 6rem;
  height: 2.2rem;
  background-color: var(---secondary);
  border-color:transparent;
 border-top-right-radius:50%; 
  border-top-left-radius:50%; 
  border-bottom-right-radius:50%; 
  border-bottom-left-radius:50%; 
  margin-right:10px;
  color:var(---white);
  font-size:var(---fontSize-1);
  text-transform:capitalize;
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .subscription-container{
  display: flex;
  flex-direction:row;
  align-items: center;
}

.message-container{
  width: 40rem;
}

.form-control{
 
}
}
`

export default Wrapper;