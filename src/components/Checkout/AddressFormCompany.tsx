import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEditAddressMutation } from "../../features/api/userApiSlice";
import { useAppSelector, useFormDataNIP, useFormDataNormal, useFormDataPostCode } from "../../hooks/hooks";
import FormInput from "../general/FormInput";
const AddressFormCompany = ({ title, id, companyName, companyNIP, city, street, houseNumber, apartmentNumber, postCode, hideAddressForm }: { title: string, id: number, companyName: string, companyNIP: string, city: string, street: string, houseNumber: string, apartmentNumber: string, postCode: string, hideAddressForm: () => void }) => {

  //form input states
  const { value: companyNameValue, handleChange: nameChange, errorMessage: companyNameError, setErrorMessage: setCompanyNameError } = useFormDataNormal(companyName)
  const { value: companyTinValue, handleChange: tinChange, errorMessage: companyTinError, setErrorMessage: setCompanyTinError } = useFormDataNIP(companyNIP)

  const { value: streetValue, handleChange: streetChange, errorMessage: streetError, setErrorMessage: setStreetError } = useFormDataNormal(street)
  const { value: cityValue, handleChange: cityChange, errorMessage: cityError, setErrorMessage: setCityError } = useFormDataNormal(city)
  const { value: apartmentValue, handleChange: apartmentChange, errorMessage: apartmentError, setErrorMessage: setApartmentError } = useFormDataNormal(apartmentNumber)
  const { value: houseValue, handleChange: houseNumberChange, errorMessage: houseError, setErrorMessage: setHouseError } = useFormDataNormal(houseNumber)
  const { value: postCodeValue, handleChange: postCodeChange, errorMessage: postCodeError, setErrorMessage: setPostCodeError } = useFormDataPostCode(postCode)



  const [editAddress] = useEditAddressMutation()
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)
  const navigate = useNavigate()


  const handleFormSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
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
        id: 0,
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
      const response = await editAddress({ id, url: `/address/edit`, token, body: data })
      if (response.data) {
        navigate('/cart/checkout')
      }
      hideAddressForm()
    }
  }

  return <Wrapper>
    <div style={{ display: title ? 'flex' : 'none' }}>
      <h2>{title}</h2>
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
        <button type="button" className="cancel-btn btn" onClick={() => hideAddressForm()}><span>cancel</span></button>
      </div>
    </form>
  </Wrapper>
}

const Wrapper = styled.div`
position: absolute;
top: 0;
left: 5%;
display: flex;
flex-direction: column;
max-width: var(---maxWidth-1);
margin: 0 auto;
padding: 1rem;
z-index: 2;

background-color: var(---white);

.form-control{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 80vw;
}

.name-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap:10px;
}

.apart-number,
.code-city{
   display: flex;
  align-items: center;
  column-gap:0.5rem;
}

.name-input,
.city-input,
.code-input,
.telephone-input{
 width: 100%;
}


.city-input,
.code-input,
.apart-input{
  width: 39vw;
}

.street-input,
.company-input{
  width: 100%;
}


.btn-container{
  display: flex;
  align-items: center;
  column-gap:2rem;
}

.form-btn-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.save-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  border-color:transparent;
  border-radius:5px;
  width: 12rem;
  height: 2.5rem;
  background-color: var(---light);
  color: var(---white);
}

.save-btn:hover,
.cancel-btn{
  cursor: pointer;
}

.save-btn:hover{
  background-color: var(---primary);
}

.cancel-btn:hover{
  background-color: var(---secondary);
  color: var(---white);
}

.cancel-btn{
    display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(---ghost);
  border-color:transparent;
  border-radius:5px;
  width: 12rem;
  height: 2.5rem;
}


@media screen and (min-width: 768px){
display: flex;
max-width: 60vw;


.form-control{
    width: 60vw;
}

.name-container,
.apart-number,
.code-city{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


.city-input,
.code-input,
.apart-input{
  width: 29.5vw;
}

.name-container{
  column-gap:10px;
}

 
.company-input,
.street-input{
  width:100%;
}
}

@media screen and (min-width: 1092px){

display: flex;
max-width: 30vw;


.form-control{
    width: 30vw;
}

.apart-number,
.code-city{
  display: flex;
  flex-direction:column;
  row-gap: 1rem;
  width: 100%;
}
.city-input,
.code-input,
.apart-input{
  width: 100%;
}
}
`
export default AddressFormCompany;