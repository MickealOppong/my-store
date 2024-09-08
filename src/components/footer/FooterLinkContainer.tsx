import { FooterLinks } from "../../types/general"
import FooterLink from "./FooterLink"

const FooterLinkContainer = ({ data }: { data: FooterLinks[] }) => {
  return <div className="big-links">
    {
      data.map((item) => {
        return <div className="title" key={item.id}>
          <h2>{item.title}</h2>
          <div >
            {
              item.content.map((link) => {
                return <FooterLink url={link.url ? link.url : ''} text={link.text} key={link.id} />
              })
            }
          </div>
        </div>
      })
    }
  </div>
}
export default FooterLinkContainer