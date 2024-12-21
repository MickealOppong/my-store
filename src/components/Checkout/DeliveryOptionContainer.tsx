import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ResponseData } from "../../types/general";
import { customFetch, getFromLocalStorage } from "../../util/util";
import DeliveryOption from "./DeliveryOption";



const DeliveryOptionContainer = () => {
  const { courierList, userOrder } = useLoaderData() as ResponseData
  const courier = courierList.find((item) => item.courier === userOrder.courier)
  const [active, setActive] = useState<number>(courier ? courier.id : courierList[0].id)
  const navigate = useNavigate()
  //const username = useAppSelector((state) => state.userSlice.username)

  const handleClick = (id: number) => {
    setActive(() => id)
    updateCourier({ orderId: userOrder.id, courierId: id })
  }


  const { mutate: updateCourier } = useMutation({
    mutationFn: ({ orderId, courierId }: { orderId: number, courierId: number }) => customFetch.patch('/orders/change-courier', { orderId, courierId }, {
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

  if (courierList.length === 0) {
    return <></>
  }

  return <Wrapper>
    {
      <div className="parent">
        <div className="delivery-type">
          <p>Delivery options</p>
        </div>
        <div className="content">
          {
            courierList.map((courier) => {
              return <div className="option" onClick={() => handleClick(courier.id)} key={courier.id}>
                <div className={`check-div ${courier.id === active ? 'active' : ''}`} >
                  <div className="checkbox"></div>
                </div>
                <DeliveryOption {...courier} />
              </div>
            })
          }
        </div>
      </div>
    }
  </Wrapper>
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding:0 5px;

.content{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
     .delivery-type{
      display: flex;
      font-size:var(---fontSize-1);
      font-weight:500;
    }

    .option{
      display: flex;
      column-gap:5px;
    }
    .check-div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    border-radius:50%;
    border: var(---secondary) solid 2px;
}

.checkbox{
  width: 0.7rem;
  height: 0.7rem;
  border-radius:50%;
}

.active .checkbox{
  background-color: var(---secondary); 
}

@media screen and (min-width: 1092px){

}

`
export default DeliveryOptionContainer