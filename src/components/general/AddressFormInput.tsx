import { Store } from "@reduxjs/toolkit"
import { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useDeliveryAddressMutation } from "../../features/api/userApiSlice"
import { useAppSelector, useFormData, useFormDataNormal, useFormDataPostCode, useFormDataTelephone } from "../../hooks/hooks"
import { TAddressParams } from "../../types/TAddressParams"
import { TDeliveryAddressDto } from "../../types/TDeliveryAddressDto"
import FormInput from "../general/FormInput"
import Loading from "./Loading"


export const action = (store: Store) => async () => {

  console.log(store.getState());

}
const AddressFormInput = () => {
  const navigate = useNavigate()
  const userId = useAppSelector((state) => state.userSlice.id)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const [addDeliveryAddress, { isLoading }] = useDeliveryAddressMutation()



  //check data input for errors
  const { value: firstName, handleChange: firstNameChange, errorMessage: firstNameError, setErrorMessage: setFirstNameError } = useFormData('')
  const { value: lastName, handleChange: lastNameChange, errorMessage: lastNameError, setErrorMessage: setLastNameError } = useFormData('')
  const { value: companyName, handleChange: companyNameChange } = useFormData('')
  const { value: street, handleChange: streetChange, errorMessage: streetError, setErrorMessage: setStreetError } = useFormDataNormal('')
  const { value: city, handleChange: cityChange, errorMessage: cityError, setErrorMessage: setCityError } = useFormDataNormal('')
  const { value: apartment, handleChange: apartmentChange, errorMessage: apartmentError, setErrorMessage: setApartmentError } = useFormDataNormal('')
  const { value: house, handleChange: houseNumberChange, errorMessage: houseError, setErrorMessage: setHouseError } = useFormDataNormal('')
  const { value: postCode, handleChange: postCodeChange, errorMessage: postCodeError, setErrorMessage: setPostCodeError } = useFormDataPostCode('')
  const { value: telephone, handleChange: telephoneChange, errorMessage: telError, setErrorMessage: setTelError } = useFormDataTelephone('')


  //handle submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const addressData = Object.fromEntries(formData);
    const firstName = addressData.firstName as string
    const lastName = addressData.lastName as string
    const companyName = addressData.companyName as string
    const street = addressData.street as string
    const houseNumber = addressData.houseNumber as string
    const apartmentNumber = addressData.apartmentNumber as string
    const postCode = addressData.postCode as string
    const city = addressData.city as string
    const telephone = addressData.telephone as string


    const obj: TDeliveryAddressDto & TAddressParams = {
      firstName,
      lastName,
      companyName,
      street,
      houseNumber,
      apartmentNumber,
      postCode,
      city,
      userId,
      token,
      telephone,
      url: `/address/delivery/${userId}`
    }

    if (!firstName && !lastName && !street && !city && !apartment && !house && !postCode && !telephone) {
      setFirstNameError(() => 'This   is required')
      setLastNameError(() => 'This  is required')
      setStreetError(() => 'This  is required')
      setCityError(() => 'This  is required')
      setHouseError(() => 'This  is required')
      setTelError(() => 'This  is required')
      setPostCodeError(() => 'This  is required')
      setApartmentError(() => 'This  is required')
      return
    }
    if (!firstNameError && !lastNameError && !streetError && !cityError && !houseError && !apartmentError && !postCodeError && !telError) {
      try {
        const response = await addDeliveryAddress(obj)
        if (response) {
          navigate('/my-account/account-setting')
        }
      } catch (error) {
        console.log(error);
        return false;
      }

    }


  }

  if (isLoading) {
    return <Loading />
  }

  return <Wrapper>
    <form className="form-control" method="post" onSubmit={handleSubmit}>
      <div className="form-input">
        {/**  NAME */}
        <div className="name-div">
          <div className="input-container">
            <FormInput type="text" label="First Name" name="firstName" hasError={firstNameError.length > 0} placeholder="First Name"
              width="name-input" value={firstName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => firstNameChange(e)} />
            <span className="error"  >{firstNameError}</span>
          </div>

          <div className="input-container">
            <FormInput type="text" label="Last name" name="lastName" placeholder="Last name" hasError={lastNameError.length > 0} width="name-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => lastNameChange(e)} value={lastName} />
            <span className="error" >{lastNameError}</span>
          </div>
        </div>

        {/**  COMPANY */}

        <FormInput type="text" label="Company name (optional)" name="companyName" placeholder="" width="company-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => companyNameChange(e)} value={companyName} />

        {/**STREET */}
        <div className="input-container">
          <FormInput type="text" label="Street" name="street" hasError={streetError.length > 0} placeholder="" width="street-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => streetChange(e)} value={street} />
          <span className="error" >{streetError}</span>
        </div>
        <div className="apart-div">
          <div className="input-container">
            {/**HOUSE  NUMBER */}
            <FormInput type="text" label="House number" name="houseNumber" hasError={houseError.length > 0
            } placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => houseNumberChange(e)} value={house} />
            <span className="error" >{houseError}</span>
          </div>

          <div className="input-container">
            {/**APARTMENT  NUMBER */}
            <FormInput type="text" label="Apartment number" hasError={apartmentError.length > 0} name="apartmentNumber" placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => apartmentChange(e)} value={apartment} />
            <span className="error" >{apartmentError}</span>
          </div>
        </div>
        <div className="code-div">
          <div className="input-container">
            {/**ZIP CODE */}
            <FormInput type="text" label="Zip code" name="postCode" placeholder="" hasError={postCodeError.length > 0} width="code-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => postCodeChange(e)} value={postCode} />
            <span className="error" >{postCodeError}</span>
          </div>
          <div className="input-container">
            {/**CITY` */}
            <FormInput type="text" label="City" name="city" placeholder="" hasError={cityError.length > 0} width="code-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => cityChange(e)} value={city} />
            <span className="error" >{cityError}</span>
          </div>
        </div>
        <div className="input-container">
          {/**CITY` */}
          <FormInput type="text" label="Telephone" name="telephone" hasError={telError.length > 0} placeholder="" width="tel-input"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => telephoneChange(e)} value={telephone} />
          <span className="error" >{telError}</span>
        </div>
      </div>
      <div className="btn-container">
        <button type="submit" className="save-btn btn"><span>save address</span></button>
        <Link to={'/my-account/account-setting'} className="cancel-btn btn" ><span>cancel</span></Link>
      </div>
    </form>

  </Wrapper >
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
margin: 0  auto;
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
.code-input,
.tel-input{
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

.input-container{
display: flex;
flex-direction: column;
width: 100%;
}

.error{
  color: var(---error);
  font-size:0.75rem;
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
export default AddressFormInput