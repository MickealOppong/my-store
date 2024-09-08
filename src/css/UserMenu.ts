import styled from "styled-components";

const Wrapper = styled.div`
position: absolute;
top: 22%;
right: 10%;
display: flex;
flex-direction: column;
background-color: var(---white);
width: 12rem;
box-shadow:0 5px 5px rgba(0,0,0,0.2);

.link-title{
  display: flex;
  align-items: center;
  height: 2rem;
  font-size:var(---fontSize-1);
  background-color: var(---secondary);
  color: var(---textColor-4);
  padding: 5px;
}


.menu-link{
  display: flex;
  align-items: center;
  column-gap:10px;
  color: var(---textColor-1); 
  text-transform:capitalize;
  font-size:var(---fontSize-1);
  padding: 5px;
  margin-bottom:5px;
}

`

export default Wrapper