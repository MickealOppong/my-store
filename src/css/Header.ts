import styled from "styled-components";

const Wrapper = styled.header`
display: flex;
border-bottom:var(---primary) solid 2px;


.header-center{
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(---maxWidth-2);
  width: 100%;
  margin: 0 auto;
}

.header-center p{
color:var(---textColor)
}

`
export default Wrapper;