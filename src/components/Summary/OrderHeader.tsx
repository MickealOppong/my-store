import { useLoaderData } from "react-router-dom";
import { Order } from "../../types/general";

const OrderHeader = ({ }) => {
  const orderData = useLoaderData() as Order
  const { id } = orderData;

  return <div>
    <div>
      <h2>Order Summary</h2>
    </div>
    <div>
      <p>Your order #{id}</p>
    </div>
    <div>

    </div>
  </div>
}
export default OrderHeader