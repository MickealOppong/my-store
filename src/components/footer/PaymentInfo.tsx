import { payOptions } from "../../types/general"

const PaymentInfo = ({ data }: { data: payOptions[] }) => {
  return <div className="payment-options">
    {
      data.map((item) => {
        return <p className="pay-option" key={item.id}>{item.icon}</p>
      })
    }
  </div>
}
export default PaymentInfo