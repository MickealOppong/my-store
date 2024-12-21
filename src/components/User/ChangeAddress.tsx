import { Store } from "@reduxjs/toolkit"
import { ChangeEvent } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link, useLoaderData } from "react-router-dom"
import styled from "styled-components"
import { useFormData, useFormDataNormal, useFormDataPostCode, useFormDataTelephone } from "../../hooks/hooks"
import { useEditAddress } from "../../hooks/useEditAddresss"
import { AddressDto } from "../../types/general"
import FormInput from "../general/FormInput"

export const loader = (store: Store) => async () => {


  return null;
}
const ChangeAddress = () => {

  const data = useLoaderData() as AddressDto

  const { id, firstName, lastName, companyName, street, city, houseNumber, apartmentNumber, postCode, telephone } = data;

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

  const { editAddress } = useEditAddress()

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
    }
  }
  return <Wrapper>

    <div className="address-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change delivery address</h2>
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
        <button type="button" className="cancel-btn btn" ><span>cancel</span></button>
      </div>
    </form>

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

.address-title h2{
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
  background-color: transparent;
  border-color:transparent;
  width: 100%;
  height: 3rem;
  border-radius:5px;
  box-shadow:var(---shadow-1);
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
    transition:all .1s ease-in-out;
}





@media screen and (min-width: 768px) {
display: flex;
max-width: 70vw;
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
export default ChangeAddress