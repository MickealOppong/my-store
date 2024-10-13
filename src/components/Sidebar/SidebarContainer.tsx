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
 position:fixed;
  top: 0%;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background-color: var(---white);
  overflow:hidden;
  z-index: 30;

    @media screen and (min-width: 768px) {
    display: none;
  }
`
export default SidebarContainer