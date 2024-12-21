import styled from "styled-components";

const DeliveryOption = ({ courier, price, deliveryDate }: { courier: string, price: number, deliveryDate: String }) => {

  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return <Wrapper>
    <div className="courier">
      <span className="courier-name">{courier}</span>
      <div className="delivery-date">
        <span>{`${day[new Date(deliveryDate.toString()).getUTCDay()].substring(0, 3)}. ${new Date(deliveryDate.toString()).getUTCDate()} ${month[new Date(deliveryDate.toString()).getUTCMonth()]}. your place`}</span>
      </div>
    </div>
    <span>{price}</span>

  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

.courier{
  display: flex;
  align-items: start;
  flex-direction: column;
  row-gap: 5px;
}

.delivery-date{
  color: var(---shippingColor);
  font-size:0.85rem;
}

.courier-name{
color: var(---textColor);
}
`
export default DeliveryOption