import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { hideCompanyAddressForm } from "../../features/userToggleSlice";
import FormInput from "./FormInput";

const AddressFormCompany = () => {
  const dispatch = useDispatch();
  return <Wrapper>
    <Form className="form-control">
      <div className="name-container">
        <FormInput type="text" label="Company Tax Identification Number" name="tin" placeholder="" width="name-input" />
        <FormInput type="text" label="Company name" name="companyName" placeholder="Last name" width="name-input" />
      </div>
      <div className="street-container">
        <FormInput type="text" label="Street" name="street" placeholder="" width="" />
      </div>
      <div className="apart-number">
        <FormInput type="text" label="Building number" name="buildingNumber" placeholder="" width="apart-input" />
        <FormInput type="text" label="Apartment number" name="apartmentNumber" placeholder="" width="apart-input" />
      </div>
      <div className="code-city">
        <FormInput type="text" label="Zip code" name="zipCode" placeholder="" width="code-input" />
        <FormInput type="text" label="City" name="city" placeholder="" width="city-input" />
      </div>
      <div className="btn-container">
        <button className="save-btn btn"><span>save address</span></button>
        <button className="cancel-btn btn" onClick={() => dispatch(hideCompanyAddressForm())}><span>cancel</span></button>
      </div>
    </Form>
  </Wrapper>
}
const Wrapper = styled.div`
display: flex;
width: 100%;
background-color: var(---white);
margin-bottom:1rem;

.form-control{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 90vw;
  margin-top:1rem;
}

.name-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap:10px;
  width: 100%;
}

.apart-number,
.code-city{
   display: flex;
  align-items: center;
  column-gap:0.5rem;
  width: 50%;
}

.name-input,
.city-input,
.code-input{
  width: 90vw;
}


.city-input,
.code-input,
.apart-input{
  width: 44vw;
}
.btn-container{
  display: flex;
  align-items: center;
  column-gap:2rem;
}

.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 2rem;
  background-color: transparent;
  border-color:transparent;
  border: var(---secondary) solid 1px;
    font-size:var(---fontSize-1);
  border-radius:5px;
  color: var(---secondary);
  text-transform:capitalize;
  cursor: pointer;
  transition:'2s'
}

.btn:hover{
  background-color:var(---secondary);
  color: var(---white);
    transition:'2s'
}

`
export default AddressFormCompany;