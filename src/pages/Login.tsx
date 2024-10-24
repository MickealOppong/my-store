import { AxiosError } from "axios"
import { ChangeEvent } from "react"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import styled from "styled-components"
import { FormInput, FormInputPassword } from "../components"
import { loginUser } from "../features/userSlice"
import useFormDataEmail from "../hooks/useFormDataEmail"
import useFormDataPassword from "../hooks/useFormDataPassword"
import { customFetch, saveToLocalStorage } from "../util/util"

const Login = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  const dispatch = useDispatch();

  //form state management
  const { value: email, handleChange: emailChange, errorMessage: emailError } = useFormDataEmail('epps@mail.com')
  const { value: password, handleChange: passwordChange, errorMessage: passwordError } = useFormDataPassword('password')

  const handleRegister = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData)
    if (!username && !password) {
      return
    }
    if (!email || !password) {
      return
    }

    if (passwordError) {
      return
    }

    if (emailError) {
      return
    }
    try {
      const response = await customFetch.post('/auth/login', { username, password }, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        const user = response.data;
        saveToLocalStorage('uat', response.data.token)
        saveToLocalStorage('utk', response.data.accessToken)
        dispatch(loginUser(user))
        navigate('/')
      }
    } catch (error) {
      if (error instanceof AxiosError) {

      }
    }

  }

  return <Wrapper>
    <header className="header">
      <div className="header-center">
        <Link to={'/'} className="logo">za</Link>
      </div>
    </header>
    <div className="login-container">
      <div className="title-container">
        <h2>Login</h2>
      </div>
      <div className="login-center">
        <form className="form-control" method="post" onSubmit={handleRegister} >
          <div className="parent-container">
            <div>
              <FormInput label="Email" name="username" placeholder="your email" type="email" width="email-width" hasError={emailError.length > 0}
                handleChange={(e: ChangeEvent<HTMLInputElement>) => emailChange(e)} value={email} />
              <span>{emailError}</span>
            </div>
            <div>
              <FormInputPassword label="Password" name="password" placeholder="your email" width="pwd-width"
                hasError={passwordError.length > 0} handleChange={(e: ChangeEvent<HTMLInputElement>) => passwordChange(e)} value={password} />
              <span>{passwordError}</span>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="register-btn" disabled={isSubmitting}>Login</button>
          </div>
          <div className="oauth-links">
            <div className="oauth-title">
              <span className="left-span"></span>
              <span>or</span>
              <span className="right-span"></span>
            </div>
            <div className="oauth-btns">
              <Link to={'https:google.com'} target="_blank" className="google-btn"><FaGoogle /><span>Continue with google</span></Link>
              <Link to={'https://facebook.com'} target="_blank" className="facebook-btn"><FaFacebook /><span>Continue with facebook</span></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div className="register-page">
      <h4>First time on Za?</h4>
      <Link to={'/register'} className="create-account-link">create account</Link>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height:100vh;
   row-gap: 2rem;
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
  font-size:3rem;

}
.login-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
 }

.login-center{
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
  width: 100%;
  height: 2.5rem;
  background-color: var(---secondary);
  border-color:transparent;
  color: var(---white);
  border-radius:5px;
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
}

.google-btn svg,
.facebook-btn  svg{
  color: var(---primary);
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
}

.register-page{
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(---white);
}

h4{
  font-size:1rem;
  width: 25%;
  padding-left:10px;
}
.create-account-link{
  text-transform:uppercase;
  width: 80%;
  color: var(---primary);
}

@media screen and (min-width: 768px) {
.login-container{
  max-width:var(---maxWidth-2);
  margin: 0 auto;
  width: 60vw;
}
.register-page{
  max-width:var(---maxWidth-2);
  margin: 0 auto;
  width: 60vw;
}

}

@media screen and (min-width: 1092px) {
.login-container{
  max-width:45vw;
  margin: 0 auto;
  width: 100%;
}
.register-page{
 max-width:45vw;
  margin: 0 auto;
  width: 100%;
}
}
`
export default Login

