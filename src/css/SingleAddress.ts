import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
border: var(---ghost) solid 1px;
width: 100%;
padding: 10px;

p{
  color: var(---textColor);
  margin: 0;
  text-transform:capitalize;
}

.telephone{
  display: flex;
  align-items: center;
  column-gap:5px;
}

.address-container{
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

`