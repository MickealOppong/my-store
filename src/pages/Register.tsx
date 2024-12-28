import { ChangeEvent } from "react"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { FormInput, FormInputPassword } from "../components"
import { useCreateUserMutation } from "../features/api/userApiSlice"
import { useFormData } from "../hooks/hooks"
import useFormDataEmail from "../hooks/useFormDataEmail"
import useFormDataPassword from "../hooks/useFormDataPassword"

const Register = () => {
  //form state 
  const { value: firstName, handleChange: firstNameChange, errorMessage: firstNameError } = useFormData('mike');
  const { value: lastName, handleChange: lastNameChange, errorMessage: lastNameError } = useFormData('epps');
  const { value: email, handleChange: emailChange, errorMessage: emailError } = useFormDataEmail('epps@mail.com');
  const { value: password, handleChange: passwordChange, errorMessage: passwordError } = useFormDataPassword('password');

  const navigate = useNavigate();

  //const dispatch = useDispatch();


  //create user hook
  const [createUser, { isLoading }] = useCreateUserMutation()

  const handleRegister = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData)
    const username = formValues.username as string
    const firstName = formValues.firstName as string
    const lastName = formValues.lastName as string
    const password = formValues.password as string

    if (!firstNameError && !lastNameError && !emailError && !passwordError) {
      try {
        const response = await createUser({ username, firstName, lastName, password }).unwrap()
        if (response) {
          navigate('/login')
        }

      } catch (error) {
        console.log(error);
      }
    }


  }

  return <Wrapper>
    <header className="header">
      <div className="header-center">
        <Link to={'/'} className="logo">za</Link>
      </div>
    </header>
    <div className="register-container">
      <div className="title-container">
        <h2>Create  account</h2>
      </div>
      <div className="register-center">
        <form className="form-control" method="post" onSubmit={handleRegister} >
          <div className="parent-container">
            <div className="name-container">
              <div>
                <FormInput label="First Name" name="firstName" placeholder="First Name" type="text" width="name-width" hasError={firstNameError.length > 0} handleChange={(e: ChangeEvent<HTMLInputElement>) => firstNameChange(e)} value={firstName} />
                <span>{firstNameError}</span>
              </div>
              <div>
                <FormInput label="Last Name" name="lastName" placeholder="Last Name" type="text" width="name-width" hasError={lastNameError.length > 0} handleChange={(e: ChangeEvent<HTMLInputElement>) => lastNameChange(e)} value={lastName} />
                <span>{lastNameError}</span>
              </div>

            </div>
            <div>
              <FormInput label="Email" name="username" placeholder="your email" type="email" width="email-width" hasError={emailError.length > 0} handleChange={(e: ChangeEvent<HTMLInputElement>) => emailChange(e)} value={email} />
              <span className="error">{emailError}</span>
            </div>
            <div>

              <FormInputPassword label="Password" name="password" placeholder="your email" width="pwd-width" hasError={passwordError.length > 0} handleChange={(e: ChangeEvent<HTMLInputElement>) => passwordChange(e)} value={password} />
              <span>{passwordError}</span>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="register-btn">
              <div className="loading" style={{ display: isLoading ? 'flex' : 'none' }}>
              </div><span style={{ display: isLoading ? 'none' : 'flex' }}>submit</span></button>
          </div>
          <div className="oauth-links">
            <div className="oauth-title">
              <span className="left-span"></span>
              <span>or</span>
              <span className="right-span"></span>
            </div>
            <div className="oauth-btns">
              <Link to={'https://google.com'} target="_blank" className="google-btn"><FaGoogle /><span>Login with google</span></Link>
              <Link to={'https://facebook.comm'} target="_blank" className="facebook-btn"><FaFacebook /><span>Login with facebook</span></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height:100vh;
  background-color: var(---ghost);


  .header{
    display: flex;
    align-items: center;
    width: 100%;
    height: 6rem;
    background-color: var(---white);
  }

  .header-center{
      display: flex;
      max-width: var(---maxWidth-1);
      margin: 0   auto;
      width: 100%;
  }

.logo{
  color: var(---primary);
  font-size:2rem;

}
.register-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

}

.register-center{
  display: flex;
  flex-direction: column;
  width: 100%;

}

.form-control{
  display: flex;
  flex-direction: column;
    row-gap: 2rem;
    padding:2rem;
     background-color: var(---white);
}

.title-container{
  display: flex; 
  margin-left:10px;
}

.title-container h2{
   font-weight:500;
}

.parent-container{
    display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 10px;
}
.name-container{
  display: flex;
  flex-direction: column;
   width: 100%;
  row-gap: 10px;
}

.name-width,
.email-width,
.pwd-width{
  width: 100%;
}

.button-container{
  display: flex;

  width: 100%;
  justify-content: right;
}

.register-btn{
   display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  background-color: var(---light);
  border-color:transparent;
  color: var(---white);
  border-radius:5px;
  text-transform:uppercase;
  letter-spacing: 1px;
    transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.register-btn:hover{
  background-color:var(---primary);
  transition: all 1s ease-in-out;
}



.loading{
  width: 2rem;
  height: 2rem;
  border-top:red solid 2px;
  border-radius:50%;
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
}


 @keyframes spin {
 from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
 }

.oauth-links{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 2rem;
}

.oauth-title{
  display: flex;
  align-items: center;
  width: 100%;
}

.oauth-title span{
  color: var(---textColor);
  text-transform:capitalize;
}
.left-span,
.right-span{
  width: 100%;
  height: 2px;
  background-color:var(---ghost);
}

.oauth-btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  row-gap: 1rem;
}

.google-btn,
.facebook-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  border: var(---textColor) solid 1px;
  transition: all 0.2s ease-in-out;
}

.google-btn svg,
.facebook-btn  svg{
  color: var(---light);
  width: 10%;
  height: 50%;
} 

.google-btn span,
.facebook-btn  span{
  display: flex;
  justify-content: center;
  color: var(---textColor);
  width:100%;
  height: 50%;
  text-transform:uppercase;
  letter-spacing: var(---spacing-2);


}

.google-btn:hover,
.facebook-btn:hover{
  background-color: var(---ghost);
  font-weight:700;
  transition: all 0.2s ease-in-out;

}

.google-btn:hover svg,
.facebook-btn:hover svg{
  color: var(---primary);
  transition: all 0.2s ease-in-out;
}

.error{
  color: var(---error);
}
@media screen and (min-width: 768px) {
.register-container{
  max-width:var(---maxWidth-2);
  margin: 2rem auto;
  width: 60vw;
}
}

@media screen and (min-width: 1092px) {
.register-container{
  max-width:55vw;
  margin: 2rem auto;
  width: 100%;
}
}

@media screen and (min-width: 1200px) {
.register-container{
  max-width:30vw;
  margin: 2rem auto;
  width: 100%;
}
}
`
export default Register

