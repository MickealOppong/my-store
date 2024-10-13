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
  display: flex;
  flex-direction: column;
  background-color: var(---white);
  width: 100%;
  height: 100%;
  z-index: 30;

    @media screen and (min-width: 768px) {
    display: none;
  }
`
export default SidebarContainer