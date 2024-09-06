import styled from "styled-components";

const Wrapper = styled.header`
display: flex;
background-color: var(---secondary);

.header-center{
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(---maxWidth-2);
  width: 100%;
  margin: 0 auto;
}

.header-center p{
color:var(---textColor-4)
}

`
export default Wrapper;