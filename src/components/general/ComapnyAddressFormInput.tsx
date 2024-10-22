import { Store } from "@reduxjs/toolkit"
import { FormEvent, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useFormData, useFormDataNIP, useFormDataNormal, useFormDataPostCode } from "../../hooks/hooks"
import { customFetch, getFromLocalStorage } from "../../util/util"
import FormInput from "../general/FormInput"


export const action = (store: Store) => async () => {

  console.log(store.getState());

}
const CompanyAddressFormInput = () => {
  const navigate = useNavigate()
  //check data input for errors
  const { value: companyName, handleChange: firstNameChange, errorMessage: companyNameError } = useFormDataNormal('')
  const { value: companyTin, handleChange: lastNameChange, errorMessage: companyTinError } = useFormDataNIP('')
  const { value: street, handleChange: streetChange, errorMessage: streetError } = useFormData('')
  const { value: city, handleChange: cityChange, errorMessage: cityError } = useFormData('')
  const { value: apartment, handleChange: apartmentChange, errorMessage: apartmentError } = useFormDataNormal('')
  const { value: house, handleChange: houseNumberChange, errorMessage: houseError } = useFormDataNormal('')
  const { value: postCode, handleChange: postCodeChange, errorMessage: postCodeError } = useFormDataPostCode('')

  //check  for empty form submission
  const [defErrorCompanyName, setDefErrorCompanyName] = useState<string>('');
  const [defErrorCompanyTin, setDefErrorCompanyTin] = useState<string>('');
  const [defErrorStreet, setDefErrorStreet] = useState<string>('');
  const [defErrorCity, setDefErrorCity] = useState<string>('');
  const [defErrorHouse, setDefErrorHouse] = useState<string>('');
  const [defErrorApartment, setDefErrorApartment] = useState<string>('');
  const [defErrorPostCode, setDefErrorPostCode] = useState<string>('');


  //function to   create address 
  async function createAddress({ ...data }): Promise<boolean | undefined> {

    try {
      const response = await customFetch.post('/address/invoice-address', data, {
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
    formData.append('addressType', 'INVOICE')
    const addressData = Object.fromEntries(formData);
    console.log(addressData)

    if (!companyName && !companyTin && !street && !city && !house && !apartment && !postCode) {
      setDefErrorCompanyName(() => 'This field is required')
      setDefErrorCompanyTin(() => 'This field is required')
      setDefErrorStreet(() => 'This field is required')
      setDefErrorCity(() => 'This field is required')
      setDefErrorApartment(() => 'This field is required')
      setDefErrorPostCode(() => 'This field is required')
      setDefErrorHouse(() => 'This field is required')
      return;
    }


    if (!companyName) {
      setDefErrorCompanyName(() => 'This field is required')
      return;
    }

    if (!companyTin) {
      setDefErrorCompanyTin(() => 'This field is required')
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

    if (!postCode) {
      setDefErrorPostCode(() => 'This field is required')
      return;
    }


    if (defErrorCompanyName || companyNameError) {
      return
    }
    if (defErrorCompanyTin || companyTinError) {
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
    setDefErrorCompanyName(() => '')
  }, [companyName])

  {/**LAST NAME */ }
  useEffect(() => {
    setDefErrorCompanyTin(() => '')
  }, [companyTin])

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

  {/**CITY */ }
  useEffect(() => {
    setDefErrorCity(() => '')
  }, [city])


  return <Wrapper>
    <form className="form-control" method="post" onSubmit={handleSubmit}>
      <div className="form-input">
        {/**  NAME */}
        <div className="input-container">
          <FormInput type="text" label="Company Name" name="companyName" hasError={companyNameError.length === 0 ? defErrorCompanyName.length > 0 : companyNameError.length > 0} placeholder="First Name"
            width="name-input" value={companyName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => firstNameChange(e)} />
          <span className="error"  >{defErrorCompanyName || companyNameError}</span>
        </div>

        <div className="input-container">
          <FormInput type="text" label="NIP" name="companyTIN" placeholder="Last name" hasError={companyTinError.length === 0 ? defErrorCompanyTin.length > 0 : companyTinError.length > 0} width="name-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => lastNameChange(e)} value={companyTin} />
          <span className="error" >{defErrorCompanyTin || companyTinError}</span>
        </div>
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
export default CompanyAddressFormInput