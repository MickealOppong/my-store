import { Link } from "react-router-dom"

const FooterLink = ({ url, text }: { url: string, text: string }) => {
  return <Link to={url} className="link">
    <p>{text}</p>
  </Link>
}
export default FooterLink