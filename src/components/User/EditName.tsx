import { Store } from "@reduxjs/toolkit"
import { FormEvent } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { useEditNameMutation } from "../../features/api/userApiSlice"
import { updateUser } from "../../features/userSlice"
import { useAppSelector, useFormData } from "../../hooks/hooks"
import { TEditNameParams } from "../../types/TEditNameParams"
import FormInput from "../general/FormInput"

export const loader = (store: Store) => async () => {

  return null;
}
const EditName = () => {
  //store dispatcher object
  const dispatch = useDispatch()

  //get user date from store
  const userFirstName = useAppSelector((state) => state.userSlice.firstName)
  const userLastName = useAppSelector((state) => state.userSlice.lastName)

  //get first name and last name from user slice
  const id = useAppSelector((state) => state.userSlice.id)
  const token = useAppSelector((state) => state.userSlice.tokenDto.token)

  //user api slice hook to edit name
  const [editName, { isLoading }] = useEditNameMutation()

  //set form default first name and last name from user slice
  const { value: firstName, errorMessage: firstNameError, handleChange: firstNameChange } = useFormData(userFirstName)
  const { value: lastName, errorMessage: lastNameError, handleChange: lastNameChange } = useFormData(userLastName)

  const navigate = useNavigate();


  //handle submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const formValues = Object.fromEntries(formData);
    const firstName = formValues.firstName as string
    const lastName = formValues.lastName as string

    const obj: TEditNameParams = { url: '/users/edit-name/', id, token, firstName, lastName }

    if (!firstNameError && !lastNameError) {
      const returnedValue = await editName(obj)

      if (returnedValue) {
        dispatch(updateUser(returnedValue.data))
        navigate('/my-account/account-setting')
      }
    }


  }

  return <Wrapper>
    <div className="form-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change First and Last name</h2>
    </div>
    <form className="form-control" method="post" onSubmit={handleSubmit}>
      <div className="form-input">
        <div>
          <FormInput label={'First name'} placeholder="Your first name" type="text" name="firstName" width="input-width" hasError={firstNameError.length > 0}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => firstNameChange(e)} value={firstName} />
          <span className="error">{firstNameError}</span>
        </div>
        <div>
          <FormInput label={'Last name'} placeholder="Your last name" type="text" name="lastName" width="input-width" hasError={lastNameError.length > 0}
            handleChange={(e: React.ChangeEvent<HTMLInputElement>) => lastNameChange(e)} value={lastName} />
          <span className="error">{lastNameError}</span>
        </div>


      </div>
      <div className="btns">
        <Link to={'/my-account/account-setting'} role="button" className="cancel-btn" type="submit"><span>Cancel</span></Link>
        <button className="submit-btn" type="submit">Submit</button>
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

.form-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 1rem  auto;
width: 100%;;

}

.form-title h2{
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


.input-width{
  width: 100%;
}

.btns{
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 15px;
  
}

.submit-btn,
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

.submit-btn{
  background-color: var(---primary);
  color: var(---white);
}


.cancel-btn:hover{
  background-color: var(---secondary);
  color: var(---white);
    transition:all .1s ease-in-out;
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



.btns{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap:10px;
}

}

@media screen and (min-width: 1092px) {
  width: 70vw;
}
`

export default EditName

function navigate(arg0: string) {
  throw new Error("Function not implemented.")
}
