import { Store } from "@reduxjs/toolkit"
import { FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useInvoiceAddressMutation } from "../../features/api/userApiSlice"
import { useAppSelector, useFormDataNIP, useFormDataNormal, useFormDataPostCode } from "../../hooks/hooks"
import { TAddressParams } from "../../types/TAddressParams"
import { TInvoiceAddressDto } from "../../types/TInvoiceAddressDto"
import FormInput from "../general/FormInput"
import Loading from "./Loading"


export const action = (store: Store) => async () => {

  console.log(store.getState());

}
const CompanyAddressFormInput = () => {
  const navigate = useNavigate()
  const userId = useAppSelector((state) => state.userSlice.id)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const [addInvoiceAddress, { isLoading }] = useInvoiceAddressMutation()


  //check data input for errors
  const { value: companyName, handleChange: nameChange, errorMessage: companyNameError, setErrorMessage: setCompanyNameError } = useFormDataNormal('')
  const { value: companyTin, handleChange: tinChange, errorMessage: companyTinError, setErrorMessage: setCompanyTinError } = useFormDataNIP('')

  const { value: street, handleChange: streetChange, errorMessage: streetError, setErrorMessage: setStreetError } = useFormDataNormal('')
  const { value: city, handleChange: cityChange, errorMessage: cityError, setErrorMessage: setCityError } = useFormDataNormal('')
  const { value: apartment, handleChange: apartmentChange, errorMessage: apartmentError, setErrorMessage: setApartmentError } = useFormDataNormal('')
  const { value: house, handleChange: houseNumberChange, errorMessage: houseError, setErrorMessage: setHouseError } = useFormDataNormal('')
  const { value: postCode, handleChange: postCodeChange, errorMessage: postCodeError, setErrorMessage: setPostCodeError } = useFormDataPostCode('')





  //handle submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const addressData = Object.fromEntries(formData);

    const companyNIP = addressData.companyNIP as string
    const companyName = addressData.companyName as string
    const street = addressData.street as string
    const houseNumber = addressData.houseNumber as string
    const apartmentNumber = addressData.apartmentNumber as string
    const postCode = addressData.postCode as string
    const city = addressData.city as string

    const obj: TInvoiceAddressDto & TAddressParams = {
      firstName: '',
      lastName: '',
      companyName,
      street,
      houseNumber,
      apartmentNumber,
      companyNIP,
      postCode,
      city,
      userId,
      token,
      url: `/address/invoice/company/${userId}`
    }

    if (!companyName && !companyTin && !street && !city && !house && !apartment && !postCode) {
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
      try {
        const returnedValue = await addInvoiceAddress(obj)

        if (returnedValue) {
          navigate('/my-account/account-setting')
        }
      } catch (error) {

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
        <div className="input-container">
          <FormInput type="text" label="Company Name" name="companyName" hasError={companyNameError.length > 0} placeholder="First Name"
            width="name-input" value={companyName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => nameChange(e)} />
          <span className="error"  >{companyNameError}</span>
        </div>

        <div className="input-container">
          <FormInput type="text" label="NIP" name="companyNIP" placeholder="Last name" hasError={companyTinError.length > 0} width="name-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => tinChange(e)} value={companyTin} />
          <span className="error" >{companyTinError}</span>
        </div>
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