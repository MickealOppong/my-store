import styled from "styled-components";

const InvoiceAddress = ({ name, street, zipCode, city, telephone }: { name: string, street: string, zipCode: string, city: string, telephone: string }) => {


  return <Wrapper>
    <div className="delivery-data">
      <span className="name">{name}</span>
      <span>{street}</span>
      <span>{zipCode + " " + city}</span>
      <span>{telephone}</span>
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
export default InvoiceAddress