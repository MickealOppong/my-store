
import { Social } from ".."
import Wrapper from "../../css/footer"
import { footerContent, paymentOptions, socialLinks } from "../../util/data"
import FooterLinkContainer from "./FooterLinkContainer"
import PaymentInfo from "./PaymentInfo"
import SmallLinksContainer from "./SmallLinksContainer"

const Footer = () => {

  return <Wrapper>
    <FooterLinkContainer data={footerContent} />
    <SmallLinksContainer data={footerContent} />
    <div className="footer-info">
      <Social data={socialLinks} />
      <PaymentInfo data={paymentOptions} />
    </div>

  </Wrapper>
}


export default Footer