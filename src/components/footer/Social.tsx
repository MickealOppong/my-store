import { Link } from "react-router-dom"
import { Social } from "../../types/general"
import Icon from "../general/Icon"

const PaymentInfo = ({ data }: { data: Social[] }) => {
  return <div className="socials">
    {
      data.map((item) => {
        return <Link to={item.url} key={item.id} className="social-link">
          <Icon icon={item.icon} />
        </Link>
      })
    }
  </div>
}
export default PaymentInfo