
import { Social } from ".."
import Wrapper from "../../css/footer"
import { footerContent, paymentOptions, socialLinks } from "../../util/data"
import FooterLinkContainer from "./FooterLinkContainer"
import PaymentInfo from "./PaymentInfo"
import SmallLinksContainer from "./SmallLinksContainer"

const Footer = () => {

  return <Wrapper>
    <div className="footer-center">
      <FooterLinkContainer data={footerContent} />
      <SmallLinksContainer data={footerContent} />
      <div className="footer-info">
        <Social data={socialLinks} />
        <PaymentInfo data={paymentOptions} />
      </div>
    </div>
  </Wrapper>
}


export default Footer