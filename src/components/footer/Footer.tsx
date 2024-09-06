
import Wrapper from "../../css/footer"
import { footerContent } from "../../util/data"
import FooterLinkContainer from "./FooterLinkContainer"
import SmallLinksContainer from "./SmallLinksContainer"

const Footer = () => {

  return <Wrapper>
    <FooterLinkContainer data={footerContent} />
    <SmallLinksContainer data={footerContent} />
  </Wrapper>
}


export default Footer