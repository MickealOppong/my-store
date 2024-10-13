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
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: var(---white);
  width: 100vw;
  height: 100vh;
  z-index: 600;


    @media screen and (min-width: 768px) {
    display: none;
  }
`
export default SidebarContainer