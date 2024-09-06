import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { Content } from "../../types/general"
import FooterLink from "./FooterLink"

const SmallLinks = ({ title, data }: { title: string, data: Content[] }) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  return <div className="small-link">
    <div className="link-title" onClick={() => setShowContent(() => !showContent
    )}>
      <p>{title}</p>
      <div className="icon">    {

        showContent ? <FiChevronUp /> : <FiChevronDown />
      }
      </div>
    </div>
    <div className={`links-content ${showContent ? 'show' : 'hide'}`}>
      {
        data.map((link) => {
          return <FooterLink url={link.url ? link.url : ''} text={link.text} />
        })
      }
    </div>
  </div>
}
export default SmallLinks