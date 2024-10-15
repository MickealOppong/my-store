import { Form } from "react-router-dom";
import styled from "styled-components";
import FormInput from "../general/FormInput";
const CompanyAddressFormInput = () => {

  return <Wrapper>
    <Form className="form-control">
      <div className="name-div">
        <FormInput type="text" label="Company Tax Identification Number" name="tin" placeholder="" width="name-input" />
        <FormInput type="text" label="Company name" name="companyName" placeholder="" width="company-input" />
      </div>
      <FormInput type="text" label="Street" name="street" placeholder="" width="street-input" />
      <div className="apart-div">
        <FormInput type="text" label="Building number" name="buildingNumber" placeholder="" width="apart-input" />
        <FormInput type="text" label="Apartment number" name="apartmentNumber" placeholder="" width="apart-input" />
      </div>
      <div className="code-div">
        <FormInput type="text" label="Zip code" name="zipCode" placeholder="" width="code-input" />
        <FormInput type="text" label="City" name="city" placeholder="" width="code-input" />
      </div>
      <div className="btn-container">
        <button className="save-btn btn"><span>save address</span></button>
        <button className="cancel-btn btn" ><span>cancel</span></button>
      </div>
    </Form>
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 99vw;
margin-bottom:2rem;
row-gap: var(---c-gap-2);

.address-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 1rem  auto;
width: 100%;;

}

.address-title p{
  font-weight:500;
}

.link-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: var(---white);
  border-radius:50%;
  box-shadow:var(---shadow-1);
  font-size:var(---fontSize-2);
  color: black;
  cursor: pointer;
}

.form-control{
  display: flex;
  flex-direction: column;
  row-gap: var(---c-gap-2);
}

.form-input{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: var(---white);
  padding:1rem;
}

.name-div,
.street-div,
.apart-div,
.code-div{
  display: flex;
  flex-direction: column;
  row-gap: 10px;
 width: 100%;
}

.name-input,
.company-input,
.street-input,
.apart-input,
.code-input{
  width: 100%;
}

.btn-container{
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
  
}

.save-btn,
.cancel-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  border-color:transparent;
  width: 100%;
  height: 3rem;
  border-radius:5px;
}

.cancel-btn{
  border: var(---secondary) solid   1px;
  color: var(---textColor);
  transition:all .1s ease-in-out
}

.save-btn{
  background-color: var(---primary);
    color: var(---white);
}


.cancel-btn:hover{
  background-color: var(---secondary);
  color: var(---white);
    transition:all .1s ease-in-out
}




@media screen and (min-width: 768px) {
display: flex;
max-width: 65vw;
width: 65vw;

  .form-input{
  padding:2rem;
}

.name-div,
.apart-div,
.code-div{
  flex-direction:row;
  width:100%;
  column-gap:10px;
}


.name-input,
.company-input,
.street-input,
.apart-input,
.code-input{
  width:100%;
}

.company-input,
.street-input{
width: 100%;
}

.btn-container{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  column-gap:10px;
}

}

@media screen and (min-width: 1092px) {
  width: 70vw;
}
`
export default CompanyAddressFormInput