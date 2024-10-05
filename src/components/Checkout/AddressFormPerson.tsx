import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import Wrapper from "../../css/AddressForm";
import { hideCompanyAddressForm } from "../../features/userToggleSlice";
import FormInput from "../general/FormInput";
const AddressFormPerson = () => {
  const dispatch = useDispatch();
  return <Wrapper>
    <Form className="form-control">
      <div className="name-container">
        <FormInput type="text" label="First Name" name="firstName" placeholder="First Name" width="name-input" />
        <FormInput type="text" label="Last name" name="lastName" placeholder="Last name" width="name-input" />
      </div>
      <div className="street-container">
        <FormInput type="text" label="Street" name="street" placeholder="" width="street-input" />
      </div>
      <div className="apart-number">
        <FormInput type="text" label="House number" name="houseNumber" placeholder="" width="apart-input" />
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

export default AddressFormPerson;