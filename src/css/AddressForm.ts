import styled from "styled-components";

const Wrapper = styled.div`
position: absolute;
top: 5%;
left: 5%;

display: flex;
flex-direction: column;
max-width: var(---maxWidth-1);
margin: 0 auto;
background-color: var(---white);
padding: 1rem;
z-index: 2;

.form-control{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 80vw;
}

.name-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap:10px;
}

.apart-number,
.code-city{
   display: flex;
  align-items: center;
  column-gap:0.5rem;
}

.name-input,
.city-input,
.code-input,
.telephone-input{
 width: 100%;
}


.city-input,
.code-input,
.apart-input{
  width: 39vw;
}

.street-input,
.company-input{
  width: 100%;
}


.btn-container{
  display: flex;
  align-items: center;
  column-gap:2rem;
}

.form-btn-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.save-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  border-color:transparent;
  border-radius:5px;
  width: 12rem;
  height: 2.5rem;
  background-color: var(---light);
  color: var(---white);
}

.save-btn:hover,
.cancel-btn{
  cursor: pointer;
}

.save-btn:hover{
  background-color: var(---primary);
}

.cancel-btn:hover{
  background-color: var(---secondary);
  color: var(---white);
}

.cancel-btn{
    display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(---ghost);
  border-color:transparent;
  border-radius:5px;
  width: 12rem;
  height: 2.5rem;
}


@media screen and (min-width: 768px){
top: 0%;
left: 15%;
display: flex;
max-width: 60vw;


.form-control{
    width: 60vw;
}

.name-container,
.apart-number,
.code-city{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


.city-input,
.code-input,
.apart-input{
  width: 29.5vw;
}

.name-container{
  column-gap:10px;
}

 
.company-input,
.street-input{
  width:100%;
}
}

@media screen and (min-width: 1092px){
left: 25%;
display: flex;
max-width: 30vw;


.form-control{
    width: 30vw;
}

.apart-number,
.code-city{
  display: flex;
  flex-direction:column;
  row-gap: 1rem;
  width: 100%;
}
.city-input,
.code-input,
.apart-input{
  width: 100%;
}
}
`
export default Wrapper;