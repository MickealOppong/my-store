import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PaymentMethod, ResponseData } from "../../types/general";
import { customFetch, getFromLocalStorage } from "../../util/util";
import PaymentOption from "./PaymentOption";



const PaymentOptions = () => {
  const { paymentMethods, userOrder } = useLoaderData() as ResponseData
  const [dataContainer] = useState<PaymentMethod[]>(paymentMethods);
  const paymentMethod = paymentMethods.find((item) => item.paymentMethod === userOrder.paymentMethod)
  const [active, setActive] = useState<number>(paymentMethod ? paymentMethod.id : paymentMethods[0].id)
  const navigate = useNavigate()

  const handleClick = (id: number) => {
    setActive(() => id)
    updatePaymentMethod({ paymentId: id, orderId: userOrder.id })
  }



  const { mutate: updatePaymentMethod } = useMutation({
    mutationFn: ({ orderId, paymentId }: { orderId: number, paymentId: number }) => customFetch.patch('/orders/change-payment', { orderId, paymentId }, {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('uat')}`,
        "Content-type": 'multipart/form-data'
      }
    }),
    onSuccess: (res) => {
      console.log(res);
      navigate('/cart/checkout')
    },
    onError: (error) => {
      console.log(error);

    }
  })

  return <Wrapper>
    <div className="payment-title">
      <p>Payment method</p>
    </div>
    <div className="parent-options">
      {
        dataContainer.map((item) => {
          return <div className="options" onClick={() => handleClick(item.id)} key={item.id}>
            <PaymentOption {...item} key={item.id} active={active} />
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