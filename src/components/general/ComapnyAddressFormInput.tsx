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
      <div className="street-div">
        <FormInput type="text" label="Street" name="street" placeholder="" width="street-input" />
      </div>
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
align-items: center;
width: 100vw;

.form-control{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  max-width: var(---maxWidth-1);
  margin: 0  auto;
  width: 100%;
}


.code-div,
.apart-div,
.street-div,
.name-div{
   display: flex;
   flex-direction: column;
  align-items: center;
    row-gap: 10px;
  width: 100%;
}

.name-input,
.street-input,
.company-input,
.apart-input,
.code-input{
  width: 100%;
}

.btn-container{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
width: 100%;
}

.save-btn{
  width: 100%;
  height: 2.5rem;
  background-color: var(---secondary);
  border-color:transparent;
    border-radius:5px;
  color: var(---white);
    box-shadow:0 5px 5px rgba(0,0,0,0.2);
}

.cancel-btn{
    width: 100%;
  height: 2.5rem;
  border-color:transparent;
  background-color:transparent;
  border:#B19CD8  solid 0.5px;
  border-radius:5px;
  box-shadow:0 5px 5px rgba(0,0,0,0.2);
    transition:all .2s ease-in-out
}

.cancel-btn:hover{
    background-color:#B19CD8;
    transition:all .2s ease-in-out
}

@media screen and (min-width: 768px){
    width: 65vw;


.code-div,
.apart-div,
.street-div,
.name-div{
   display: flex;
   flex-direction: row;
  align-items: center;
    column-gap: 10px;
  width: 100%;
}

.btn-container{
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  column-gap: 1rem;
  width: 100%;
}

.btn{
  width: 8rem;
}


}

@media screen and (min-width:1092px){
    width: 65vw;
}
`
export default CompanyAddressFormInput