import styled from "styled-components";

const Wrapper = styled.section`

  display: flex;
  width: 100%;
  height: 10rem;
background-color: var(---primary);

.subscription-container{
  display: flex;
  flex-direction: column;
  max-width: var(---maxWidth-2);
  margin: 0 auto;
  width: 100%;
}

.message-container{
  display: flex;
  color:var(---white);
}
.form-control{
display: flex;
align-items: center;
border: gray solid 1px;
width: 100%;
height: 3rem;
background-color: var(---white);
 border-top-right-radius:25px; 
  border-top-left-radius:25px; 
  border-bottom-right-radius:25px; 
  border-bottom-left-radius:25px;
}


.input-control{
  background-color: var(---white);
  width: 100%;
  height: 2rem;
  border: none;
  text-indent:10px;
  margin-left:15px;
  outline: none;
}


.join{
  width: 6rem;
  height: 2.5rem;
  background-color: var(---primary);
  border-color:transparent;
 border-top-right-radius:25px; 
  border-top-left-radius:25px; 
  border-bottom-right-radius:25px; 
  border-bottom-left-radius:25px; 
  margin-right:5px;
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

}

@media screen and (min-width: 768px){
.subscription-container{
  display: flex;
  flex-direction: row;
  max-width: var(---maxWidth-4);
  margin: 0 auto;
  width: 100%;
}


.message-container{
  width: 50rem;
}
}
`

export default Wrapper;