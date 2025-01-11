import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetPaymentListQuery, useUpdatePaymentMethodMutation } from "../../features/api/orderApi";
import { useAppSelector } from "../../hooks/hooks";
import PaymentOption from "./PaymentOption";



const PaymentOptions = ({ orderPayment }: { orderPayment: string }) => {

  const orderId = useAppSelector((state) => state.orderSlice.orderId)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const { data: paymentOptions } = useGetPaymentListQuery()
  const [updatePaymentMethod] = useUpdatePaymentMethodMutation()
  const [activePaymentOption, setActivePaymentOption] = useState<string>(orderPayment)
  //const navigate = useNavigate()


  const handleClick = (selectedPaymentMethod: string) => {
    setActivePaymentOption(() => selectedPaymentMethod)
  }

  useEffect(() => {
    updatePaymentMethod({ paymentMethod: activePaymentOption, token, orderId })
  }, [activePaymentOption])


  if (!paymentOptions) {
    return null;
  }

  return <Wrapper>
    <div className="payment-title">
      <p>Payment method</p>
    </div>
    <div className="parent-options">
      {
        paymentOptions?.map((item) => {
          return <div className="options" onClick={() => handleClick(item.paymentMethod)} key={item.id}>
            <PaymentOption {...item} key={item.id} active={activePaymentOption} />
          </div>
        })
      }
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
row-gap: 1rem;
width: 100%;

.parent-options{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom:1.5rem;
}

.options{
  display: flex;
  flex-direction: column;
}



    .payment-title{
      display: flex;
      font-size:var(---fontSize-1);
      font-weight:500;
    }

    @media screen and (min-width: 1092px){

}
`
export default PaymentOptions