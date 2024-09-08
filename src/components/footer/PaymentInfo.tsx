import { payOptions } from "../../types/general"

const PaymentInfo = ({ data }: { data: payOptions[] }) => {
  return <div className="payment-options">
    {
      data.map((item) => {
        return <img src={item.icon} alt={item.id} key={item.id} />
      })
    }
  </div>
}
export default PaymentInfo