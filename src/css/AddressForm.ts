import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
margin-bottom:1rem;
background-color: var(---white);
width: 100%;

.form-control{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 90vw;
    margin-top:1rem;
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
.code-input{
 width: 100%;
}


.city-input,
.code-input,
.apart-input{
  width: 44vw;
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

.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 2rem;
  background-color: transparent;
  border-color:transparent;
  border: var(---secondary) solid 1px;
    font-size:var(---fontSize-1);
  border-radius:5px;
  color: var(---secondary);
  text-transform:capitalize;
  cursor: pointer;
  transition:'2s'
}

.btn:hover{
  background-color:var(---secondary);
  color: var(---white);
    transition:'2s'
}

@media screen and (min-width: 768px){

display: flex;
max-width: 55vw;
width: 100%;

.name-container,
.apart-number,
.code-city{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.name-container{
  column-gap:10px;
}
.name-input,
.apart-input,
.city-input,
.code-input{
  width:100%;
}
 
.company-input,
.street-input{
  width:100%;
}
}


@media screen and (min-width: 1092px){
display: flex;
max-width: 60vw;
width: 100%;

.name-container,
.apart-number,
.code-city{
  display: flex;
  flex-direction: row;
  width: 100%;
}

.name-input,
.apart-input,
.city-input,
.code-input,
.street-input{
  width:100%;
}
 
.company-input,
.street-input{
  width:100%;
}
}
`
export default Wrapper;