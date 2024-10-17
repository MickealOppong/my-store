import styled from "styled-components";

const DeliveryAddress = () => {


  return <Wrapper>
    <div className="delivery-data">
      <span className="name">{''}</span>
      <span>{''}</span>
      <span>{''}</span>
      <span>{''}</span>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .delivery-data{
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    font-size:1rem;
   color: var(---textColor-1);
  }


  

`
export default DeliveryAddress