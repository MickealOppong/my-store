import styled from "styled-components"
import SidebarContent from "./SidebarContent"
import SidebarHeader from "./SidebarHeader"

const SidebarContainer = () => {
  return <Wrapper>
    <SidebarHeader />
    <SidebarContent />
  </Wrapper>
}

const Wrapper = styled.aside`
 position:absolute;
  top: 40%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: var(---white);
  width: 100vw;
  height: 100vh;
  z-index: 30;

    @media screen and (min-width: 768px) {
    display: none;
  }
`
export default SidebarContainer