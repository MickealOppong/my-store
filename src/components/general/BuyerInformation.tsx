import { AiOutlineSafetyCertificate } from "react-icons/ai"
import { CiClock1, CiDeliveryTruck, CiWallet } from "react-icons/ci"
import styled from "styled-components"

const BuyerInformation = () => {
  return <Wrapper>
    <div className="delivery-info">
      <CiClock1 />
      <span>Estimated delivery:</span>
      <span>In 2 working days</span>
    </div>
    <div className="delivery-price">
      <CiDeliveryTruck />
      <span>Delivery from:</span>
      <span>8.99 PLN</span>
    </div>
    <div className="return-policy">
      <AiOutlineSafetyCertificate />
      <span>Free returns-</span>
      <span>14 days</span>
    </div>
    <div className="payment-method">
      <CiWallet />
      <span>Payment methods:</span>
      <span>Pay as you like</span>
    </div>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(---white);

  .delivery-info,
  .delivery-price,
  .return-policy,
  .payment-method{
    display: flex;
    align-items: center;
    height: 3rem;
    column-gap:10px;
     border-bottom:var(---textColor-4) solid 0.5px;
      padding-left:20px;
  padding-right:20px;
  padding-top:10px;
  padding-bottom:10px;
  color: var(---textColor-1);
  }

 .delivery-info svg,
  .delivery-price svg,
  .return-policy svg,
  .payment-method svg{
    font-size:1.3rem;
  }
`
export default BuyerInformation