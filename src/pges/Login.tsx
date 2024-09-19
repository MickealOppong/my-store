import { FiUser } from "react-icons/fi"
import { RiLockPasswordLine } from "react-icons/ri"
import { Form, Link } from "react-router-dom"
import fb from '../assets/facebook.svg'
import google from '../assets/google.svg'
import twitter from '../assets/x.svg'
import Wrapper from "../css/Login"


const Login = () => {
  return <Wrapper>

    <div className="login-form">
      <div className="form-title">
        <h2>Login</h2>
      </div>
      <Form className="form-control">
        <div className="parent-container">
          <div className="email-container">
            <FiUser />
            <input type="email" name="email" placeholder="Your email" className="email" />
          </div>
          <div className="password-container">
            <RiLockPasswordLine />
            <input type="password" name="password" placeholder="Your password" className="password" />
          </div>
        </div>
        <div className="pwd-reminder">
          <Link to={''}>Forgot password?</Link>
        </div>
        <div>
          <button type="submit" className="login-btn">login</button>
        </div>
      </Form>
      <div className="oauth-login">
        <p>or sign up using</p>
        <div className="oauth-links">
          <Link to={''}><img src={fb} alt="" /></Link>
          <Link to={''}><img src={google} alt="" /></Link>
          <Link to={''}> <img src={twitter} alt="" /></Link>
        </div>
      </div>
      <div className="register-link">
        <p>Nie masz konta?</p>
        <Link to={'/register'}><span>Register</span></Link>
      </div>
    </div>
  </Wrapper>
}
export default Login

