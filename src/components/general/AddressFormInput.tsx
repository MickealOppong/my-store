import { Store } from "@reduxjs/toolkit"
import { FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useFormData, useFormDataNormal, useFormDataPostCode, useFormDataTelephone } from "../../hooks/hooks"
import { customFetch, getFromLocalStorage } from "../../util/util"
import FormInput from "../general/FormInput"


export const action = (store: Store) => async () => {

  console.log(store.getState());

}
const AddressFormInput = () => {
  const navigate = useNavigate()
  //check data input for errors
  const { value: firstName, handleChange: firstNameChange, errorMessage: firstNameError } = useFormData('')
  const { value: lastName, handleChange: lastNameChange, errorMessage: lastNameError } = useFormData('')
  const { value: companyName, handleChange: companyNameChange } = useFormData('')
  const { value: street, handleChange: streetChange, errorMessage: streetError } = useFormDataNormal('')
  const { value: city, handleChange: cityChange, errorMessage: cityError } = useFormDataNormal('')
  const { value: apartment, handleChange: apartmentChange, errorMessage: apartmentError } = useFormDataNormal('')
  const { value: house, handleChange: houseNumberChange, errorMessage: houseError } = useFormDataNormal('')
  const { value: postCode, handleChange: postCodeChange, errorMessage: postCodeError } = useFormDataPostCode('')
  const { value: telephone, handleChange: telephoneChange, errorMessage: telError } = useFormDataTelephone('')

  //check  for empty form submission
  const [defErrorFirstName, setDefErrorFirstName] = useState<string>('');
  const [defErrorLastName, setDefErrorLastName] = useState<string>('');
  const [defErrorStreet, setDefErrorStreet] = useState<string>('');
  const [defErrorCity, setDefErrorCity] = useState<string>('');
  const [defErrorHouse, setDefErrorHouse] = useState<string>('');
  const [defErrorApartment, setDefErrorApartment] = useState<string>('');
  const [defErrorPostCode, setDefErrorPostCode] = useState<string>('');
  const [defErrorTelephone, setDefErrorTelephone] = useState<string>('');


  //function to   create address 
  async function createAddress({ ...data }): Promise<boolean | undefined> {

    try {
      const response = await customFetch.post('/address/delivery-address', data, {
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`,
          "Content-Type": 'application/json'
        }
      })
      if (response.status === 200) return true;
    } catch (error) {
      return false;
    }
  }

  //handle submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    formData.append('addressType', 'DELIVERY')
    const addressData = Object.fromEntries(formData);
    console.log(addressData)

    if (!firstName && !lastName && !street && !city && !house && !apartment && !telephone && !postCode) {
      setDefErrorFirstName(() => 'This field is required')
      setDefErrorLastName(() => 'This field is required')
      setDefErrorStreet(() => 'This field is required')
      setDefErrorCity(() => 'This field is required')
      setDefErrorApartment(() => 'This field is required')
      setDefErrorTelephone(() => 'This field is required')
      setDefErrorPostCode(() => 'This field is required')
      setDefErrorHouse(() => 'This field is required')
      return;
    }


    if (!firstName) {
      setDefErrorFirstName(() => 'This field is required')
      return;
    }

    if (!lastName) {
      setDefErrorLastName(() => 'This field is required')
      return;
    }
    if (!street) {
      setDefErrorStreet(() => 'This field is required')
      return;
    }
    if (!city) {
      setDefErrorCity(() => 'This field is required')
      return;
    }
    if (!house) {
      setDefErrorHouse(() => 'This field is required')
      return;
    }
    if (!apartment) {
      setDefErrorApartment(() => 'This field is required')
      return;
    }
    if (!telephone) {
      setDefErrorTelephone(() => 'This field is required')
      return;
    }
    if (!postCode) {
      setDefErrorPostCode(() => 'This field is required')
      return;
    }


    if (defErrorFirstName || firstNameError) {
      return
    }
    if (defErrorLastName || lastNameError) {
      return
    }
    if (defErrorStreet || streetError) {
      return
    }
    if (defErrorApartment || apartmentError) {
      return
    }
    if (defErrorHouse || houseError) {
      return
    }
    if (defErrorCity || cityError) {
      return
    }
    if (defErrorTelephone || telError) {
      return
    }
    if (defErrorPostCode || postCodeError) {
      return
    }
    const returnedValue = await createAddress(addressData)
    if (returnedValue) {

      navigate('/my-account/account-setting')
    }

  }

  //clear default errors
  {/**FIRST NAME */ }
  useEffect(() => {
    setDefErrorFirstName(() => '')
  }, [firstName])

  {/**LAST NAME */ }
  useEffect(() => {
    setDefErrorLastName(() => '')
  }, [lastName])

  {/**STREET */ }
  useEffect(() => {
    setDefErrorStreet(() => '')
  }, [street])

  {/**HOUSE */ }
  useEffect(() => {
    setDefErrorHouse(() => '')
  }, [house])

  {/**APARTMENT */ }
  useEffect(() => {
    setDefErrorApartment(() => '')
  }, [apartment])

  {/**POSTCODE */ }
  useEffect(() => {
    setDefErrorPostCode(() => '')
  }, [postCode])

  {/**TELEPHONE */ }
  useEffect(() => {
    setDefErrorTelephone(() => '')
  }, [telephone])

  {/**CITY */ }
  useEffect(() => {
    setDefErrorCity(() => '')
  }, [city])


  return <Wrapper>
    <form className="form-control" method="post" onSubmit={handleSubmit}>
      <div className="form-input">
        {/**  NAME */}
        <div className="name-div">
          <div className="input-container">
            <FormInput type="text" label="First Name" name="firstName" hasError={firstNameError.length === 0 ? defErrorFirstName.length > 0 : firstNameError.length > 0} placeholder="First Name"
              width="name-input" value={firstName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => firstNameChange(e)} />
            <span className="error"  >{defErrorFirstName || firstNameError}</span>
          </div>

          <div className="input-container">
            <FormInput type="text" label="Last name" name="lastName" placeholder="Last name" hasError={lastNameError.length === 0 ? defErrorLastName.length > 0 : lastNameError.length > 0} width="name-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => lastNameChange(e)} value={lastName} />
            <span className="error" >{defErrorLastName || lastNameError}</span>
          </div>
        </div>
        {/**  COMPANY */}

        <FormInput type="text" label="Company name (optional)" name="companyName" placeholder="" width="company-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => companyNameChange(e)} value={companyName} />

        {/**STREET */}
        <div className="input-container">
          <FormInput type="text" label="Street" name="street" hasError={streetError.length === 0 ? defErrorStreet.length > 0 : streetError.length > 0} placeholder="" width="street-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => streetChange(e)} value={street} />
          <span className="error" >{defErrorStreet || streetError}</span>
        </div>
        <div className="apart-div">
          <div className="input-container">
            {/**HOUSE  NUMBER */}
            <FormInput type="text" label="House number" name="houseNumber" hasError={houseError.length === 0 ? defErrorHouse.length > 0
              : houseError.length > 0
            } placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => houseNumberChange(e)} value={house} />
            <span className="error" >{defErrorHouse || houseError}</span>
          </div>

          <div className="input-container">
            {/**APARTMENT  NUMBER */}
            <FormInput type="text" label="Apartment number" hasError={apartmentError.length === 0 ? defErrorApartment.length > 0 : apartmentError.length > 0} name="apartmentNumber" placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => apartmentChange(e)} value={apartment} />
            <span className="error" >{defErrorApartment || apartmentError}</span>
          </div>
        </div>
        <div className="code-div">
          <div className="input-container">
            {/**ZIP CODE */}
            <FormInput type="text" label="Zip code" name="postCode" placeholder="" hasError={postCodeError.length === 0 ? defErrorPostCode.length > 0 : postCodeError.length > 0} width="code-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => postCodeChange(e)} value={postCode} />
            <span className="error" >{defErrorPostCode || postCodeError}</span>
          </div>
          <div className="input-container">
            {/**CITY` */}
            <FormInput type="text" label="City" name="city" placeholder="" hasError={cityError.length === 0 ? defErrorCity.length > 0 : cityError.length > 0} width="code-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => cityChange(e)} value={city} />
            <span className="error" >{defErrorCity || cityError}</span>
          </div>
        </div>
        <div className="input-container">
          {/**CITY` */}
          <FormInput type="text" label="Telephone" name="telephone" hasError={telError.length === 0 ? defErrorTelephone.length > 0 : telError.length > 0} placeholder="" width="tel-input"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => telephoneChange(e)} value={telephone} />
          <span className="error" >{defErrorTelephone || telError}</span>
        </div>
      </div>
      <div className="btn-container">
        <button type="submit" className="save-btn btn"><span>save address</span></button>
        <Link to={'/my-account/account-setting'} className="cancel-btn btn" ><span>cancel</span></Link>
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