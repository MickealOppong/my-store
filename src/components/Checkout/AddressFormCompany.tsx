import { useDispatch } from "react-redux";
import { Form } from "react-router-dom";
import Wrapper from "../../css/AddressForm";
import { hideCompanyAddressForm } from "../../features/userToggleSlice";
import FormInput from "../general/FormInput";
const AddressFormCompany = () => {
  const dispatch = useDispatch();
  return <Wrapper>
    <Form className="form-control">
      <div className="name-container">
        <FormInput type="text" label="Company Tax Identification Number" name="tin" placeholder="" width="name-input" />
        <FormInput type="text" label="Company name" name="companyName" placeholder="" width="company-input" />
      </div>
      <div className="street-container">
        <FormInput type="text" label="Street" name="street" placeholder="" width="street-input" />
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

export default AddressFormCompany;