import { ChangeEvent, FormEvent } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { FormInputPassword } from "../../components/index"
import { useAppSelector } from "../../hooks/hooks"
import useFormDataPassword from "../../hooks/useFormDataPassword"
import { customFetch, getFromLocalStorage } from "../../util/util"

const ChangePassword = () => {
  const { value: oldPassword, handleChange: oldPasswordChange, errorMessage: oldPasswordError } = useFormDataPassword('password')
  const { value: newPassword, handleChange: newPasswordChange, errorMessage: newPasswordError } = useFormDataPassword('singing')

  const navigate = useNavigate();
  //user id
  const id = useAppSelector((state) => state.userSlice.id)


  async function changePassword(oldPassword: string, newPassword: string): Promise<boolean | undefined> {



    try {
      const response = await customFetch.patch(`/auth/change-password/${id}`, { oldPassword, newPassword }, {
        params: {
          id
        },
        headers: {
          Authorization: `Bearer ${getFromLocalStorage('uat')}`,
          "Content-Type": 'multipart/form-data'
        }
      })
      console.log(response);

      if (response.status === 200) return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }

  //handle submit event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData);
    const { oldPassword, newPassword } = data;

    if (oldPasswordError || newPasswordError) {
      return
    }
    const returnedValue = await changePassword(oldPassword as string, newPassword as string)
    if (returnedValue) {
      navigate('/login')
    }

  }

  return <Wrapper>
    <div className="link-title">
      <Link className="link-container" to={'/my-account/account-setting'}><FiArrowLeft /></Link>
      <h2>Change password</h2>
    </div>
    <form className="form-control" method="post" onSubmit={handleSubmit}>
      <div className="form-input">
        <div>
          <FormInputPassword label={'Old password'} placeholder="Your old password" name="oldPassword" width="input-width" hasError={oldPasswordError.length > 0} handleChange={(e: ChangeEvent<HTMLInputElement>) => oldPasswordChange(e)} value={oldPassword} />
          <span className="error">{oldPasswordError}</span>
        </div>
        <div>
          <FormInputPassword label={'New password'} placeholder="Your new password" name="newPassword" width="input-width" hasError={newPasswordError.length > 0} handleChange={(e: ChangeEvent<HTMLInputElement>) => newPasswordChange(e)} value={newPassword} />
          <span className="error">{newPasswordError}</span>
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

.link-title{
display: flex;
align-items: center;
column-gap:10px;
margin: 1rem  auto;
width: 100%;;

}

.link-title h2{
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
  color:var(---error);
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

export default ChangePassword