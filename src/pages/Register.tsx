import { AxiosError } from "axios"
import { ChangeEvent } from "react"
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Link, useNavigate, useNavigation } from "react-router-dom"
import styled from "styled-components"
import { FormInput } from "../components"
import { customFetch } from "../util/util"

const Register = () => {
  //const [errorMsg, setErrorMsg] = useState<string>('');
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  //const dispatch = useDispatch();

  const handleRegister = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password, firstName, lastName } = Object.fromEntries(formData)

    try {
      const response = await customFetch.post('/users/user', { username, password, firstName, lastName }, {
        headers: {
          "Content-Type": 'multipart/form-data'
        }
      });
      if (response.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        // setErrorMsg(() => error.response?.data);
      }
    }

  }


  /*
    <div>
      {
        errorMsg ? < MessageBox message={errorMsg} msgType="failure" /> : <></>
      }
    </div>
  */
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
              <FormInput label="First Name" name="firstName" placeholder="First Name" type="text" width="name-width" />
              <FormInput label="Last Name" name="lastName" placeholder="Last Name" type="text" width="name-width" />
            </div>
            <FormInput label="Email" name="username" placeholder="your email" type="email" width="email-width" />
            <FormInput label="Password" name="password" placeholder="your email" type="password" width="pwd-width" />
          </div>
          <div className="button-container">
            <button type="submit" className="register-btn" disabled={isSubmitting}>Create account</button>
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


@media screen and (min-width: 768px) {
.register-container{
  max-width:var(---maxWidth-2);
  margin: 0 auto;
  width: 60vw;
}
}

@media screen and (min-width: 1092px) {
.register-container{
  max-width:45vw;
  margin: 0 auto;
  width: 100%;
}
}
`
export default Register

