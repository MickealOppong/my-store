import { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetCourierListQuery, useUpdateCourierMutation } from "../../features/api/orderApi";
import { useAppSelector } from "../../hooks/hooks";
import Loading from "../general/Loading";
import DeliveryOption from "./DeliveryOption";



const DeliveryOptionContainer = ({ courier }: { courier: string }) => {
  const { data: courierList, isLoading } = useGetCourierListQuery()
  const [updateCourier] = useUpdateCourierMutation()
  const orderId = useAppSelector((state) => state.orderSlice.orderId)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const [activeCourier, setActiveCourier] = useState<string>(courier)




  const handleClick = async (courier: string) => {
    setActiveCourier(() => courier)

  }

  useEffect(() => {
    updateCourier({ orderId, courier: activeCourier, token })
  }, [activeCourier])

  if (!courierList) {
    return <></>
  }

  if (isLoading) {
    return <Loading />
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
              return <div className="option" onClick={() => handleClick(courier.courier)} key={courier.id}>
                <div className={`check-div ${courier.courier === activeCourier ? 'active' : ''}`} >
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