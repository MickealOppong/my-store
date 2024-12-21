import { Store } from "@reduxjs/toolkit";
import { QueryClient } from "@tanstack/react-query";
import { ChangeEvent } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { useFormDataNIP, useFormDataNormal, useFormDataPostCode } from "../../hooks/hooks";
import { useEditOrderAddress } from "../../hooks/useEditOrderAddresss";
import { AddressDto } from "../../types/general";
import { fetchAddressById } from "../../util/fetchAddressById";
import FormInput from "../general/FormInput";

const addressQuery = (id: number, token: string) => {
  return {
    queryKey: ['address', id],
    queryFn: () => fetchAddressById(id, token)
  }
}
export const loader = (store: Store, queryClient: QueryClient) => async ({ request }: { request: Request }) => {
  const url = request.url;
  const id = parseInt(url.substring(url.lastIndexOf('/') + 1, url.length))
  const token = store.getState().userSlice.token
  const response = await queryClient.fetchQuery(addressQuery(id, token))
  const data = response;
  return data;
}
const ChangeAddressInvoiceCompany = () => {
  const data = useLoaderData() as AddressDto

  const { id, companyName, companyNIP, street, city, houseNumber, apartmentNumber, postCode } = data;


  //form input states
  const { value: companyNameValue, handleChange: nameChange, errorMessage: companyNameError, setErrorMessage: setCompanyNameError } = useFormDataNormal(companyName)
  const { value: companyTinValue, handleChange: tinChange, errorMessage: companyTinError, setErrorMessage: setCompanyTinError } = useFormDataNIP(companyNIP)

  const { value: streetValue, handleChange: streetChange, errorMessage: streetError, setErrorMessage: setStreetError } = useFormDataNormal(street)
  const { value: cityValue, handleChange: cityChange, errorMessage: cityError, setErrorMessage: setCityError } = useFormDataNormal(city)
  const { value: apartmentValue, handleChange: apartmentChange, errorMessage: apartmentError, setErrorMessage: setApartmentError } = useFormDataNormal(apartmentNumber)
  const { value: houseValue, handleChange: houseNumberChange, errorMessage: houseError, setErrorMessage: setHouseError } = useFormDataNormal(houseNumber)
  const { value: postCodeValue, handleChange: postCodeChange, errorMessage: postCodeError, setErrorMessage: setPostCodeError } = useFormDataPostCode(postCode)

  //const URL = '/address/edit-delivery'
  const { editAddress } = useEditOrderAddress()



  const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData)
    const companyName = formValues.companyName as string;
    const companyNIP = formValues.companyNIP as string;
    const street = formValues.street as string;
    const apartmentNumber = formValues.apartmentNumber as string;
    const houseNumber = formValues.houseNumber as string;
    const city = formValues.city as string;
    const postCode = formValues.postCode as string;




    if (!companyNameValue && !companyTinValue && !streetValue && !cityValue && !houseValue && !apartmentValue && !postCodeValue) {
      setCompanyNameError(() => 'This is required')
      setStreetError(() => 'This  is required')
      setCityError(() => 'This  is required')
      setHouseError(() => 'This  is required')
      setCompanyTinError(() => 'This  is required')
      setPostCodeError(() => 'This  is required')
      setApartmentError(() => 'This  is required')
      return
    }
    if (!companyNameError && !companyTinError && !streetError && !cityError && !houseError && !apartmentError && !postCodeError) {
      const data = {
        id,
        companyNIP,
        lastName: '',
        firstName: '',
        houseNumber,
        apartmentNumber,
        city, street,
        companyName,
        postCode,
        telephone: ''
      }

      editAddress(data)

    }
  }

  return <Wrapper>
    <div className="address-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change invoice address</h2>
    </div>
    <form className="form-control" method="post" onSubmit={handleFormSubmit}>
      <div className="form-input">
        {/**  NAME */}
        <div className="input-container">
          <FormInput type="text" label="Company Name" name="companyName" hasError={companyNameError.length > 0} placeholder="First Name"
            width="name-input" value={companyNameValue} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => nameChange(e)} />
          <span className="error"  >{companyNameError}</span>
        </div>

        <div className="input-container">
          <FormInput type="text" label="NIP" name="companyNIP" placeholder="Last name" hasError={companyTinError.length > 0} width="name-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => tinChange(e)} value={companyTinValue} />
          <span className="error" >{companyTinError}</span>
        </div>
        {/**STREET */}
        <div className="input-container">
          <FormInput type="text" label="Street" name="street" hasError={streetError.length > 0} placeholder="" width="street-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => streetChange(e)} value={streetValue} />
          <span className="error" >{streetError}</span>
        </div>
        <div className="apart-div">
          <div className="input-container">
            {/**HOUSE  NUMBER */}
            <FormInput type="text" label="Building number" name="houseNumber" hasError={houseError.length > 0
            } placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => houseNumberChange(e)} value={houseValue} />
            <span className="error" >{houseError}</span>
          </div>

          <div className="input-container">
            {/**APARTMENT  NUMBER */}
            <FormInput type="text" label="apartment number" hasError={apartmentError.length > 0} name="apartmentNumber" placeholder="" width="apart-input"
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
  border-color:transparent;
  background-color: transparent;
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
export default ChangeAddressInvoiceCompany