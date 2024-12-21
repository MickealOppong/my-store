import { ChangeEvent } from "react";
import Wrapper from "../../css/AddressForm";
import { useFormData, useFormDataNormal, useFormDataPostCode, useFormDataTelephone } from "../../hooks/hooks";
import { useEditOrderAddress } from "../../hooks/useEditOrderAddresss";
import FormInput from "../general/FormInput";




const AddressForm = ({ title, id, firstName, lastName, city, companyName, street, houseNumber, apartmentNumber, postCode, telephone, hideAddressForm }: { title: string, id: number, firstName: string, lastName: string, city: string, companyName: string, street: string, houseNumber: string, apartmentNumber: string, postCode: string, telephone?: string, hideAddressForm: () => void }) => {




  //form input states
  const { value: firstNameValue, handleChange: firstNameChange, errorMessage: firstNameError, setErrorMessage: setFirstNameError } = useFormData(firstName ? firstName : '')
  const { value: lastNameValue, handleChange: lastNameChange, errorMessage: lastNameError, setErrorMessage: setLastNameError } = useFormData(lastName ? lastName : '')
  const { value: companyNameValue, handleChange: companyNameChange } = useFormData(companyName ? companyName : '')
  const { value: streetValue, handleChange: streetChange, errorMessage: streetError, setErrorMessage: setStreetError } = useFormDataNormal(street ? street : '')
  const { value: cityValue, handleChange: cityChange, errorMessage: cityError, setErrorMessage: setCityError } = useFormDataNormal(city ? city : '')
  const { value: apartmentValue, handleChange: apartmentChange, errorMessage: apartmentError, setErrorMessage: setApartmentError } = useFormDataNormal(apartmentNumber ? apartmentNumber : '')
  const { value: houseValue, handleChange: houseNumberChange, errorMessage: houseError, setErrorMessage: setHouseError } = useFormDataNormal(houseNumber ? houseNumber : '')
  const { value: postCodeValue, handleChange: postCodeChange, errorMessage: postCodeError, setErrorMessage: setPostCodeError } = useFormDataPostCode(postCode ? postCode : '')
  const { value: telephoneValue, handleChange: telephoneChange, errorMessage: telError, setErrorMessage: setTelError } = useFormDataTelephone(telephone ? telephone : '')

  const { editAddress } = useEditOrderAddress()


  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData)
    const firstName = formValues.firstName as string;
    const lastName = formValues.lastName as string;
    const street = formValues.street as string;
    const companyName = formValues.companyName as string;
    const apartmentNumber = formValues.apartmentNumber as string;
    const houseNumber = formValues.houseNumber as string;
    const city = formValues.city as string;
    const postCode = formValues.postCode as string;
    const telephone = formValues.telephone as string;

    if (!firstName && !lastName && !street && !city && !apartmentNumber && !houseNumber && !postCode && !telephone && !city) {
      setFirstNameError(() => 'This   is required')
      setLastNameError(() => 'This  is required')
      setStreetError(() => 'This  is required')
      setCityError(() => 'This  is required')
      setHouseError(() => 'This  is required')
      setPostCodeError(() => 'This  is required')
      setApartmentError(() => 'This  is required')
      setTelError(() => 'This is  required')
      return
    }

    if (!firstNameError && !lastNameError && !streetError && !cityError && !houseError && !apartmentError && !postCodeError && !telError) {
      const data = {
        id,
        lastName,
        firstName,
        houseNumber,
        apartmentNumber,
        city, street,
        companyName,
        postCode,
        telephone
      }
      editAddress(data)
      hideAddressForm()
    }
  }

  return <Wrapper>
    <div>
      <h2>{title}</h2>
    </div>
    <form className="form-control" method="post" onSubmit={handleFormSubmit}>
      <div className="form-input">
        {/**  NAME */}
        <div className="name-div">
          <div className="input-container">
            <FormInput type="text" label="First Name" name="firstName" hasError={firstNameError.length > 0} placeholder="First Name"
              width="name-input" value={firstNameValue} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => firstNameChange(e)} />
            <span className="error"  >{firstNameError}</span>
          </div>

          <div className="input-container">
            <FormInput type="text" label="Last name" name="lastName" placeholder="Last name" hasError={lastNameError.length > 0} width="name-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => lastNameChange(e)} value={lastNameValue} />
            <span className="error" >{lastNameError}</span>
          </div>
        </div>

        {/**  COMPANY */}

        <FormInput type="text" label="Company name (optional)" name="companyName" placeholder="" width="company-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => companyNameChange(e)} value={companyNameValue} />

        {/**STREET */}
        <div className="input-container">
          <FormInput type="text" label="Street" name="street" hasError={streetError.length > 0} placeholder="" width="street-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => streetChange(e)} value={streetValue} />
          <span className="error" >{streetError}</span>
        </div>
        <div className="apart-div">
          <div className="input-container">
            {/**HOUSE  NUMBER */}
            <FormInput type="text" label="House number" name="houseNumber" hasError={houseError.length > 0
            } placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => houseNumberChange(e)} value={houseValue} />
            <span className="error" >{houseError}</span>
          </div>

          <div className="input-container">
            {/**APARTMENT  NUMBER */}
            <FormInput type="text" label="Apartment number" hasError={apartmentError.length > 0} name="apartmentNumber" placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => apartmentChange(e)} value={apartmentValue} />
            <span className="error" >{apartmentError}</span>
          </div>
        </div>
        <div className="code-div">
          <div className="input-container">
            {/**ZIP CODE */}
            <FormInput type="text" label="Zip code" name="postCode" placeholder="" hasError={postCodeError.length > 0} width="code-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => postCodeChange(e)} value={postCodeValue} />
            <span className="error" >{postCodeError}</span>
          </div>
          <div className="input-container">
            {/**CITY` */}
            <FormInput type="text" label="City" name="city" placeholder="" hasError={cityError.length > 0} width="code-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => cityChange(e)} value={cityValue} />
            <span className="error" >{cityError}</span>
          </div>
        </div>
        <div className="input-container">
          {/**CITY` */}
          <FormInput type="text" label="Telephone" name="telephone" hasError={telError.length > 0} placeholder="" width="tel-input"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => telephoneChange(e)} value={telephoneValue} />
          <span className="error" >{telError}</span>
        </div>
      </div>
      <div className="form-btn-container">
        <button className="save-btn btn"><span>save address</span></button>
        <button type="button" className="cancel-btn btn" onClick={() => hideAddressForm()}><span>cancel</span></button>
      </div>
    </form>
  </Wrapper>
}



export default AddressForm;