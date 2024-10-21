import { Store } from "@reduxjs/toolkit"
import { FormEvent } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link, redirect, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useFormData, useFormDataPostCode, useFormDataTelephone } from "../../util/hooks"
import { customFetch, getFromLocalStorage } from "../../util/util"
import FormInput from "../general/FormInput"


export const action = (store: Store) => async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const addressData = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/address/delivery-address', addressData, {
      headers: {
        Authorization: `Bearer ${getFromLocalStorage('uat')}`,
        "Content-Type": 'application/json'
      }
    })
    if (response.status === 200) {
      return redirect('/my-account/account-setting')
    }
  } catch (error) {
    console.log(error);

    return null;
  }

}
const AddAddress = () => {
  const navigate = useNavigate()
  //const [handleChange] = useFormData('')
  const { value: firstName, handleChange: firstNameChange, errorMessage: firstNameError } = useFormData('')
  const { value: lastName, handleChange: lastNameChange } = useFormData('')
  const { value: companyName, handleChange: companyNameChange } = useFormData('')
  const { value: street, handleChange: streetChange } = useFormData('')
  const { value: city, handleChange: cityChange } = useFormData('')
  const { value: apartment, handleChange: apartmentChange } = useFormData('')
  const { value: house, handleChange: houseNumberChange } = useFormData('')
  const { value: postCode, handleChange: postCodeChange, errorMessage: postCodeError } = useFormDataPostCode('')
  const { value: telephone, handleChange: telephoneChange } = useFormDataTelephone('')
  //errors


  //function to   create address 
  async function createAddress({ ...data }) {

    try {
      const response = await customFetch.post('/address/delivery-address', data, {
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`,
          "Content-Type": 'application/json'
        }
      })
      if (response.status === 200) {
        console.log('posted');

      }
    } catch (error) {
      console.log(error);

    }
  }
  //console.log('out', value, errorMessage);



  //handle submit event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    formData.append('addressType', 'Delivery')
    const addressData = Object.fromEntries(formData);
    console.log(addressData);
    console.log(firstNameError);



    if (firstNameError) {
      console.log('error');
      return

    } else {
      //createAddress(addressData)
    }


  }


  return <Wrapper>
    <div className="address-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Add delivery address</h2>
    </div>
    <form className="form-control" method="post" onSubmit={handleSubmit}>
      <div className="form-input">
        {/**  NAME */}
        <div className="name-div">
          <div>
            <FormInput type="text" label="First Name" name="firstName" hasError={firstNameError.length > 0} placeholder="First Name"
              width="name-input" value={firstName} handleChange={(e: React.ChangeEvent<HTMLInputElement>) => firstNameChange(e)} />
            <span  >{firstNameError}</span>
          </div>

          <div>
            <FormInput type="text" label="Last name" name="lastName" placeholder="Last name" hasError={false} width="name-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => lastNameChange(e)} value={lastName} />
            <span>{''}</span>
          </div>
        </div>
        {/**  COMPANY */}

        <FormInput type="text" label="Company name (optional)" name="companyName" placeholder="" width="company-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => companyNameChange(e)} value={companyName} />

        {/**STREET */}
        <div>
          <FormInput type="text" label="Street" name="street" hasError={false} placeholder="" width="street-input" handleChange={(e: React.ChangeEvent<HTMLInputElement>) => streetChange(e)} value={street} />
          <span>{''}</span>
        </div>
        <div className="apart-div">
          <div>
            {/**HOUSE  NUMBER */}
            <FormInput type="text" label="House number" name="houseNumber" hasError={false} placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => houseNumberChange(e)} value={house} />
            <span>{''}</span>
          </div>

          <div>
            {/**APARTMENT  NUMBER */}
            <FormInput type="text" label="Apartment number" hasError={false} name="apartmentNumber" placeholder="" width="apart-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => apartmentChange(e)} value={apartment} />
            <span>{''}</span>
          </div>
        </div>
        <div className="code-div">
          <div>
            {/**ZIP CODE */}
            <FormInput type="text" label="Zip code" name="postCode" placeholder="" hasError={postCodeError.length > 0} width="code-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => postCodeChange(e)} value={postCode} />
            <span >{postCodeError}</span>
          </div>
          <div>
            {/**CITY` */}
            <FormInput type="text" label="City" name="city" placeholder="" hasError={false} width="code-input"
              handleChange={(e: React.ChangeEvent<HTMLInputElement>) => cityChange(e)} value={city} />
            <span>{''}</span>
          </div>
        </div>
        <div>
          {/**CITY` */}
          <FormInput type="text" label="Telephone" name="telephone" hasError={false} placeholder="" width="tel-input"
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => telephoneChange(e)} value={telephone} />
          <span>{''}</span>
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
export default AddAddress