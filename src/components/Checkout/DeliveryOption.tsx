import styled from "styled-components";

const DeliveryOption = ({ courier, cost, img }: { courier: string, cost: number, img: string }) => {


  return <Wrapper>
    <img src={img} alt="" />
    <span>{courier}</span>
    <span>{cost}</span>
  </Wrapper>
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

img{
  width: 4em;
  height: 4rem;
}

`
export default DeliveryOption